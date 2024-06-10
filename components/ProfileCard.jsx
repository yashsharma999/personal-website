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
import Link from 'next/link';

export default function ProfileCard() {
  return (
    <div
      className='lg:sticky lg:top-4 shadow-sm w-full lg:w-[300px] max-h-[450px] bg-white rounded-lg'
      id='profile_card'
    >
      <div className='relative w-full h-[100px] mb-8'>
        <Image src='/universe.jpeg' fill='cover' className='rounded-t-lg' />
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
          I&apos;m a fullstack developer building smooth user experiences on the
          web.
        </h2>
        <div className='flex gap-4 my-4'>
          <Button>View Portfolio</Button>
          <Button variant='secondary' className='px-3'>
            <Link
              target={'_blank'}
              href={'https://www.papermark.io/view/clx965qg80002btubw9isd9dg'}
            >
              <Image src={download} height={30} width={30} alt='download' />
            </Link>
          </Button>
          <Button variant='secondary' className='px-3'>
            <Link href={'contact'}>
              <Image src={mail} height={30} width={30} alt='contact' />
            </Link>
          </Button>
        </div>
        <Button className='max-w-[200px]'>
          <Link
            href={'https://cal.com/yash-sharma-dzuol1/15min'}
            target='_blank'
          >
            Schedule a Call
          </Link>
        </Button>
      </div>
    </div>
  );
}
