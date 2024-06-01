import { getAllPosts } from '@/lib/api';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

export default function Articles() {
  const allPosts = getAllPosts();

  return (
    <section className='mb-8'>
      <div className='mb-8'>
        <h1 className='text-2xl font-semibold'>Articles</h1>
        <h2 className='text-base text-slate-500 '>
          I write about random stuff
        </h2>
      </div>
      <div className='shadow-sm bg-white rounded-lg p-8'>
        {allPosts?.map((post) => {
          return (
            <Link
              href={`/posts/${post.slug}`}
              key={post.slug}
              className='flex flex-col gap-2 cursor-pointer'
            >
              <div className='flex justify-between items-center'>
                <h2 className='max-w-[40ch] font-semibold hover:text-sky-500 '>
                  {post?.title ?? ''}
                </h2>
                <p className='text-slate-500 font-bold pl-8'>{'>'}</p>
              </div>
              <div className='text-slate-500 text-sm'>
                {dayjs(post?.date).format('MMM D, YYYY')}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
