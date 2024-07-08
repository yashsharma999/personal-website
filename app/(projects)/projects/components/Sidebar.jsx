'use client';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Sidebar({ slugs }) {
  const p = usePathname();

  return (
    <div className='lg:sticky lg:top-4 p-4 bg-white h-fit min-w-[250px] shadow-sm rounded-lg'>
      <h2 className='font-bold'>More Projects</h2>
      <Separator className='my-4' />
      {arr.map((item) => (
        <Link
          key={item.value}
          href={'#'}
          className={`${
            p.split('/')[2] === item.value ? 'bg-slate-300 ' : ''
          } py-1 px-2 rounded-md `}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

const arr = [
  {
    label: 'BetterSide',
    value: 'betterside',
  },
];
