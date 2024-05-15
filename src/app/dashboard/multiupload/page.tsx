"use client";

import { MultiFileDropzone, type FileState } from "@/components/MultiDrop";
import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <div className="flex flex-col items-center m-6 gap-2">
      <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.myProtectedFiles.upload({
                  options: { temporary: true }, //so that ghost files aren't uploaded if user quita the pge after dropping files,so we run the confirm function in the submit hyandler or anywhere where the code indicated that the user i confirming his uploads
                  file: addedFileState.file,
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar at 100%
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, "COMPLETE");
                    }
                  },
                });
                setUrls([...urls, res.url]);
                console.log(res);
              } catch (err) {
                updateFileProgress(addedFileState.key, "ERROR");
              }
            })
          );
        }}
      />
      {/* THIS BUTTON IS ONLY NECESSARY HERE BECAUSE i added the temporary options to the "protectedfiles upload function, TO PROTECT AGAINST GHOST FILES ON THE SERVER, otherwise not necessary but handy in debugging and space saving" */}
      <button
        onClick={async () => {
          //this is the async function that confirms and fully uploads the files to the server
          for (const url of urls) {
            await edgestore.myProtectedFiles.confirmUpload({ url });
          }
        }}
      >
        Click to confIrm/make permanent temprary uploads
      </button>
      {urls.map((url, index) => (
        <Link key={index} href={url} target="_blank">
          URL{index + 1}
        </Link>
      ))}
    </div>
  );
}
