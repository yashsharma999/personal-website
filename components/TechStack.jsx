import { techstack } from '@/lib/contants';
import Image from 'next/image';
import React from 'react';

export default function TechStack() {
  return (
    <section className='mb-8'>
      <div className='mb-8'>
        <h1 className='text-2xl font-semibold'>My tech stack</h1>
        <h2 className='text-base text-slate-500 '>
          Tools and technologies I work with
        </h2>
      </div>
      <div className='flex flex-wrap gap-4'>
        {techstack?.map((item, i) => (
          <div
            key={i}
            className='shadow-md rounded-full h-[50px] w-[50px] bg-white flex justify-center items-center'
          >
            <Image
              src={item}
              alt='tech'
              className='h-[30px] w-[30px] rounded-full'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
