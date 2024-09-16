"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
     IconBrandGithub,
     IconBrandGoogle,
     IconBrandOnlyfans,
} from "@tabler/icons-react";

// export default function SignupFormDemo() {
//      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//           e.preventDefault();
//           console.log("Form submitted");
//      };
//      return (
//           <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//                     Welcome to RE-Dact
//                </h2>
//                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//                     Upload the file that you want to mask
//                </p>

//                <form className="my-8" onSubmit={handleSubmit}>
//                     <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//                          <LabelInputContainer>
//                               <Label htmlFor="firstname">First name</Label>
//                               <Input id="firstname" placeholder="Tyler" type="text" />
//                          </LabelInputContainer>
//                          <LabelInputContainer>
//                               <Label htmlFor="lastname">Last name</Label>
//                               <Input id="lastname" placeholder="Durden" type="text" />
//                          </LabelInputContainer>
//                     </div>
//                     <LabelInputContainer className="mb-4">
//                          <Label htmlFor="email">Email Address</Label>
//                          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
//                     </LabelInputContainer>
//                     <LabelInputContainer className="mb-4">
//                          <Label htmlFor="password">Password</Label>
//                          <Input id="password" placeholder="••••••••" type="password" />
//                     </LabelInputContainer>
//                     <LabelInputContainer className="mb-8">
//                          <Label htmlFor="twitterpassword">Your twitter password</Label>
//                          <Input
//                               id="twitterpassword"
//                               placeholder="••••••••"
//                               type="twitterpassword"
//                          />
//                     </LabelInputContainer>

//                     <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

//                     <div className="flex flex-col space-y-4">
//                     </div>
//                </form>
//           </div>
//      );
// }

export default function SignupFormDemo() {
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log("Form submitted");
     };

     return (
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
               <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to RE-Dact
               </h2>
               <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Upload the file that you want to mask
               </p>

               <form className="my-8" onSubmit={handleSubmit}>
                    {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                         <LabelInputContainer>
                              <Label htmlFor="firstname">First name</Label>
                              <Input id="firstname" placeholder="Tyler" type="text" />
                         </LabelInputContainer>
                         <LabelInputContainer>
                              <Label htmlFor="lastname">Last name</Label>
                              <Input id="lastname" placeholder="Durden" type="text" />
                         </LabelInputContainer>
                    </div> */}
                    {/* <LabelInputContainer className="mb-4">
                         <Label htmlFor="email">Email Address</Label>
                         <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                         <Label htmlFor="password">Password</Label>
                         <Input id="password" placeholder="••••••••" type="password" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-8">
                         <Label htmlFor="twitterpassword">Your twitter password</Label>
                         <Input
                              id="twitterpassword"
                              placeholder="••••••••"
                              type="password"
                         />
                    </LabelInputContainer> */}

                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                         <LabelInputContainer>
                              <Label htmlFor="level">Select Level</Label>
                              <select
                                   id="level"
                                   className="p-2 rounded-md dark:bg-neutral-800 dark:text-white">
                                   <option value="level1">Level 1</option>
                                   <option value="level2">Level 2</option>
                                   <option value="level3">Level 3</option>
                                   <option value="custom">Custom</option>
                              </select>
                         </LabelInputContainer>
                    </div>

                    <div className="mb-4 my-8">
                         <p className="text-neutral-800 dark:text-neutral-200 font-semibold">Select Fields to Mask</p>
                         <div className="flex flex-col space-y-2 py-4">
                              <label className="flex items-center">
                                   <input type="checkbox" id="name" className="mr-2" />
                                   <span className="text-neutral-800 dark:text-neutral-200">Name</span>
                              </label>
                              <label className="flex items-center">
                                   <input type="checkbox" id="photo" className="mr-2" />
                                   <span className="text-neutral-800 dark:text-neutral-200">Photo</span>
                              </label>
                              <label className="flex items-center">
                                   <input type="checkbox" id="address" className="mr-2" />
                                   <span className="text-neutral-800 dark:text-neutral-200">Address</span>
                              </label>
                              <label className="flex items-center">
                                   <input type="checkbox" id="number" className="mr-2" />
                                   <span className="text-neutral-800 dark:text-neutral-200">Number</span>
                              </label>
                         </div>
                    </div>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    <div className="flex flex-col space-y-4">
                         <button type="submit" className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                              Submit
                         </button>
                    </div>
               </form>
          </div>
     );
}


const BottomGradient = () => {
     return (
          <>
               <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
               <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          </>
     );
};

const LabelInputContainer = ({
     children,
     className,
}: {
     children: React.ReactNode;
     className?: string;
}) => {
     return (
          <div className={cn("flex flex-col space-y-2 w-full", className)}>
               {children}
          </div>
     );
};

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