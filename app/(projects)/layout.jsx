import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function ProjectLayout({ children }) {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='p-4 bg-white h-fit min-w-[250px] shadow-sm rounded-lg'>
        <h2 className='font-bold'>More Projects</h2>
        <Separator className='my-4' />
        <Link href={'#'}>Betterside</Link>
      </div>
      <div className='grow'>{children}</div>
    </div>
  );
}
