"use client"
import Image from 'next/image';
import {useRouter} from 'next/navigation'
import React,{useState, useEffect} from "react";
import type { Metadata, Viewport } from "next";
// Ensures the Studio route is statically generated
export const dynamic = "force-static";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export const getAuthAdmin = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user?.id || !user.email) {
    throw new Error('Invalid user data')
  
  }
  if(user.email==process.env.ADMIN_EMAIL)
    return true
  return false
}
// Set the right `viewport`, `robots` and `referer` meta tags
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

import Studio from "./Studio";

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the title until the Studio is loaded
  title: "Loading Studio…",
};

export const viewport: Viewport = {
  ...studioViewport,
  // Overrides the viewport to resize behavior
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  const router=useRouter();
  const [isAdmin,setisAdmin]:any=useState(true)
  useEffect(()=>{
    setisAdmin(getAuthAdmin())
    if(!isAdmin){
      router.back()//router.push("/"); 
    }
  },[])
  if(!isAdmin){
   
    return(
      <div className="w-screen h-screen flex items-center">
        <p>You do have have access to this page...going to previous page</p>
      </div>
    );
  }
  if(isAdmin){
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex flex-grow ">
        <Studio />;
      </div>
    </div>
  );

  }
return (
  <div className="bg-black flex flex-col items-center h-screen">
  <p className="text-center text-white">Authenticating... </p>
  <Image
    className=""
    src={"/ytloading.gif"}
    alt="loading"
    height={200}
    width={300}
    unoptimized
  />
</div>
);

}

