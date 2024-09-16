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

export function GridPattern() {
     const columns = 41;
     const rows = 11;
     return (
          <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
               {Array.from({ length: rows }).map((_, row) =>
                    Array.from({ length: columns }).map((_, col) => {
                         const index = row * columns + col;
                         return (
                              <div
                                   key={`${col}-${row}`}
                                   className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${index % 2 === 0
                                        ? "bg-gray-50 dark:bg-neutral-950"
                                        : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                                        }`}
                              />
                         );
                    })
               )}
          </div>
     );
}

{/* <div className="w-full mx-auto h-screen border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg"> */ }