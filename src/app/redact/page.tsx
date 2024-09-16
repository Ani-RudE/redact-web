"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { WavyBackground } from "@/components/ui/wavy-background";
import FormUI from "@/components/FormUI";

export default function FileUploadDemo() {
     const [files, setFiles] = useState<File[]>([]);
     const handleFileUpload = (files: File[]) => {
          setFiles(files);
          console.log(files);
     };

     return (
          <div>
               <WavyBackground className="max-w-4xl mx-auto">
                    <div className="flex justify-s">
                         <FormUI />
                         <div className="right-file-upload w-full max-w-xl mx-auto max-h-96 mt-20 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg flex items-center justify-center h-screen">
                              <FileUpload onChange={handleFileUpload} />
                         </div>
                    </div>
               </WavyBackground>
          </div>
     );
}
{/* <div className="w-full mx-auto h-screen border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg"> */ }