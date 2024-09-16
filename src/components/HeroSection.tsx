import React from 'react'
import Link from "next/link";
import { Spotlight } from '@/components/ui/Spotlight';
import { Button } from './ui/moving-border';

function HeroSection() {
     return (
          <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

               <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
               />

               <div className='p-4 relative z-10 w-full text-center'>
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">RE-DACT</h1>
                    <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">An easy-to-use, secure redaction tool powered by natural language processing and machine learning. It allows users to redact, mask, or anonymize sensitive information from various input formats, such as text, images, and PDFs, with a customizable gradational scale. </p>
               </div>
               <div className='mt-4'>
                    <Link className='mt-4' href={"/redact"}> {/* /chat */}
                         <Button className='bg-black' borderRadius="1.75rem">
                              Begin RE-DACT
                         </Button>
                    </Link>
               </div>

          </div>
     )
}

export default HeroSection