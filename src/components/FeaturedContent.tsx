"use client";
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Link from 'next/link';
import featuredData from "@/data/sample-featured.json"

import { BsArrowUpLeft } from "react-icons/bs"; {/* <BsArrowUpLeft /> */ }
import { BsArrowUp } from "react-icons/bs"; {/* <BsArrowUp /> */ }
import { BsArrowUpRight } from "react-icons/bs"; {/* <BsArrowUpRight /> */ }
import { BsArrowDownLeft } from "react-icons/bs"; {/* <BsArrowDownLeft /> */ }
import { BsArrowDown } from "react-icons/bs"; {/* <BsArrowDown /> */ }
import { BsArrowDownRight } from "react-icons/bs"; {/* <BsArrowDownRight /> */ }

interface Content {
     id: number,
     text: string,
     isFeatured: boolean
}

export const FeaturedContent = () => {
     const featuredContent = featuredData.content.filter((content: Content) => content.isFeatured)

     return (
          <div>
               <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
                    <Card title="Easy-to-use Redaction Tool" icon={<PreHoverIcon />}>
                         <CanvasRevealEffect
                              animationSpeed={5.1}
                              containerClassName="bg-emerald-900"
                         />
                    </Card>
                    <Card title="Powered by NLP and Machine Learning" icon={<PreHoverIcon2 />}>
                         <CanvasRevealEffect
                              animationSpeed={3}
                              containerClassName="bg-black"
                              colors={[
                                   [236, 72, 153],
                                   [232, 121, 249],
                              ]}
                              dotSize={2}
                         />
                         {/* Radial gradient for the cute fade */}
                         <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    </Card>
                    <Card title="Supports .jpg, .png, .pdf, .txt, and much more..." icon={<PreHoverIcon3 />}>
                         <CanvasRevealEffect
                              animationSpeed={3}
                              containerClassName="bg-sky-600"
                              colors={[[125, 211, 252]]}
                         />
                    </Card>
               </div>

               <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
                    <Card title="Temp placeholder text" icon={<PreHoverIcon4 />}>
                         <CanvasRevealEffect
                              animationSpeed={5.1}
                              containerClassName="bg-emerald-900"
                         />
                    </Card>
                    <Card title="Temp placeholder text" icon={<PreHoverIcon5 />}>
                         <CanvasRevealEffect
                              animationSpeed={3}
                              containerClassName="bg-black"
                              colors={[
                                   [236, 72, 153],
                                   [232, 121, 249],
                              ]}
                              dotSize={2}
                         />
                         {/* Radial gradient for the cute fade */}
                         <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    </Card>
                    <Card title="Temp placeholder text" icon={<PreHoverIcon6 />}>
                         <CanvasRevealEffect
                              animationSpeed={3}
                              containerClassName="bg-sky-600"
                              colors={[[125, 211, 252]]}
                         />
                    </Card>
               </div>
          </div>
     )
}

const PreHoverIcon = () => {
     return (
          <svg
               width="100"
               height="100"
               viewBox="0 0 40 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="h-20 w-20 text-black dark:text-white group-hover/canvas-card:text-white flex justify-center items-center"
          >
               <BsArrowUpLeft className='h-full w-full' />
          </svg>
     );
};

const PreHoverIcon2 = () => {
     return (
          <svg
               width="100"
               height="100"
               viewBox="0 0 40 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="h-20 w-20 text-black dark:text-white group-hover/canvas-card:text-white flex justify-center items-center"
          >
               <BsArrowUp className='h-full w-full' />
          </svg>
     );
};

const PreHoverIcon3 = () => {
     return (
          <svg
               width="100"
               height="100"
               viewBox="0 0 40 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="h-20 w-20 text-black dark:text-white group-hover/canvas-card:text-white flex justify-center items-center"
          >
               <BsArrowUpRight className='h-full w-full' />
          </svg>
     );
};

const PreHoverIcon4 = () => {
     return (
          <svg
               width="100"
               height="100"
               viewBox="0 0 40 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="h-20 w-20 text-black dark:text-white group-hover/canvas-card:text-white flex justify-center items-center"
          >
               <BsArrowDownLeft className='h-full w-full' />
          </svg>
     );
};

const PreHoverIcon5 = () => {
     return (
          <svg
               width="100"
               height="100"
               viewBox="0 0 40 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="h-20 w-20 text-black dark:text-white group-hover/canvas-card:text-white flex justify-center items-center"
          >
               <BsArrowDown className='h-full w-full' />
          </svg>
     );
};

const PreHoverIcon6 = () => {
     return (
          <svg
               width="100"
               height="100"
               viewBox="0 0 40 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="h-20 w-20 text-black dark:text-white group-hover/canvas-card:text-white flex justify-center items-center"
          >
               <BsArrowDownRight className='h-full w-full' />
          </svg>
     );
};


const Card = ({
     title,
     icon,
     children,
}: {
     title: string;
     icon: React.ReactNode;
     children?: React.ReactNode;
}) => {
     const [hovered, setHovered] = React.useState(false);
     return (
          <div
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}
               className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-xs w-full mx-auto p-4 relative h-[20rem]"
          >
               <Icon className="absolute h-8 w-8 -top-3 -left-3 dark:text-white text-black" />
               <Icon className="absolute h-8 w-8 -bottom-3 -left-3 dark:text-white text-black" />
               <Icon className="absolute h-8 w-8 -top-3 -right-3 dark:text-white text-black" />
               <Icon className="absolute h-8 w-8 -bottom-3 -right-3 dark:text-white text-black" />

               <AnimatePresence>
                    {hovered && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="h-full w-full absolute inset-0"
                         >
                              {children}
                         </motion.div>
                    )}
               </AnimatePresence>

               <div className="relative z-20 flex flex-col items-center justify-center h-full w-full"> {/* Change */}
                    <div className="text-center transition duration-200 w-full flex items-center justify-center opacity-100 group-hover/canvas-card:opacity-0">
                         {icon}
                    </div>
                    <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                         {title}
                    </h2>
               </div>
          </div>
     );
};


export const Icon = ({ className, ...rest }: any) => {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className={className}
               {...rest}
          >
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
     );
};