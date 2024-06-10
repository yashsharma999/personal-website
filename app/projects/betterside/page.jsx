import Link from 'next/link';
import React from 'react';

export default function BetterSide() {
  return (
    <article className='max-w-3xl mx-auto pt-8'>
      <section className='flex flex-col gap-4 text-center'>
        <h1 className='text-4xl'>{`Your complete business toolkit 🧰`}</h1>
        <h2 className='text-slate-500 opacity-6'>
          {` Personal project to streamline the journey from your idea to reality,
        providing solutions for solving only one problem: How to grow your
        business ?`}
        </h2>
        <div className='mt-4 flex gap-4 items-center justify-center w-full'>
          <Link
            target={'_blank'}
            href='https://github.com/yashsharma999/agency-concept'
            className='text-sky-500'
          >
            Github Link
          </Link>
          <Link
            target={'_blank'}
            href={'https://www.betterside.fun/'}
            className='text-sky-500'
          >
            Project Link
          </Link>
        </div>
      </section>
    </article>
  );
}
