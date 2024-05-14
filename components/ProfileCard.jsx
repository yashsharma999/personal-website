import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import download from '@/assets/icons/download.svg';
import mail from '@/assets/icons/mail.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ProfileCard() {
  return (
    <div
      className='shadow-sm w-[300px] min-h-[400px] bg-white rounded-lg'
      id='profile_card'
    >
      <div className='relative w-full h-[100px] mb-8'>
        <Image
          src='/universe.jpeg'
          objectFit='cover'
          height={100}
          width={400}
          className='rounded-t-lg'
        />
        <div
          className='shadow-lg h-[50px] w-[50px] absolute bottom-0 left-[30px] translate-y-[50%] rounded-full bg-white
         flex justify-center items-center'
        >
          <div className='h-[43px] text-2xl w-[43px] rounded-full bg-sky-100	flex justify-center items-center'>
            😎
          </div>
        </div>
      </div>
      <div className='px-6 py-2 flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold'>I&apos;m Yash Sharma</h1>
        <h2 className='text-base text-slate-500 leading-7'>
          I&apos;m a frontend developer based in New Delhi, India.
        </h2>
        <div className='flex gap-4 my-4'>
          <Button>View Portfolio</Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='secondary' className='px-3'>
                  <Image src={download} height={30} width={30} alt='download' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='secondary' className='px-3'>
                  <Image src={mail} height={30} width={30} alt='contact' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact Me</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
