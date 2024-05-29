import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl'>{title}</h1>
      {/* <div className='relative w-full h-[200px]'>
        <Image
          src={coverImage}
          fill='cover'
          className='rounded-lg opacity-90'
        />
      </div> */}
      <div className='flex gap-2 mt-5 mb-8'>
        <div className='relative w-[50px] h-[50px]'>
          <Image src={author.picture} className='rounded-full' fill='cover' />
        </div>
        <div className='flex flex-col'>
          <h3>{author.name}</h3>
          <h6 className='text-slate-500 text-sm'>
            {dayjs(date).format('MMM D, YYYY')}
          </h6>
        </div>
      </div>
    </div>
  );
}
