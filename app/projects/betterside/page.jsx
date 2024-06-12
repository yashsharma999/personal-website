import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../projects.module.css';

export default function BetterSide() {
  return (
    <article className={`max-w-3xl mx-auto pt-8 ${styles.project}`}>
      <section className='flex flex-col gap-4 text-center'>
        <h1 className='text-4xl'>{`Your complete business toolkit 🧰`}</h1>
        <h3 className='text-slate-500 opacity-6'>
          {` Personal project to streamline the journey from your idea to reality,
        providing solutions for solving only one problem: How to grow your
        business ?`}
        </h3>
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
      <main className='mt-16 flex flex-col gap-8'>
        <h2 className=''>Technical Overview</h2>
        <div>
          <h4 className='font-semibold mb-1 text-xl'>Sanity CMS</h4>
          <p>
            {` Integrated Sanity CMS in the project to maintain the content related
          to the provided services.
          `}
            <br />
            {`This makes it really easy to update information about a particular service.`}
          </p>
          <div className='mt-4 w-full relative h-[400px] rounded-sm overflow-hidden shadow-sm'>
            <Image
              src={'/images/sanity-demo.png'}
              layout='fill' // Use single quotes around 'fill' to avoid syntax issues
              objectFit='cover'
              alt='sanity cms'
            />
          </div>
        </div>
        <div>
          <h4 className='font-semibold mb-1 text-xl'>Clerk</h4>
          <p>
            {`Really easy to add authentication to Next.js app. Took me at max 10 mins for integration. 10,000 requests / month in the free-tier !!
          `}
            <br />
          </p>
          <div className='flex mt-4 flex-col md:flex-row gap-4 '>
            <div className='w-full md:w-1/2 relative h-[300px] rounded-sm overflow-hidden shadow-sm'>
              <Image
                src={'/images/clerk.png'}
                // Use single quotes around 'fill' to avoid syntax issues
                alt='sanity cms'
                layout='fill' // Use single quotes around 'fill' to avoid syntax issues
                objectFit='cover'
              />
            </div>
            <div className='w-full md:w-1/2 relative h-[300px] rounded-sm overflow-hidden shadow-sm'>
              <Image
                src={'/images/clerk-2.png'}
                // Use single quotes around 'fill' to avoid syntax issues
                alt='sanity cms'
                layout='fill' // Use single quotes around 'fill' to avoid syntax issues
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}
