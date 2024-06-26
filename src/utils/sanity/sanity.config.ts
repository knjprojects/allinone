// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./schemaTypes";

const projectId =  process.env.SANITY_PROJECT_ID! //"6rv..."
const dataset = "production"; // process.env.SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from

  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
