import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function BetterSide() {
  return (
    <article className='flex flex-col gap-8'>
      <section
        className=' text-white px-4 pt-12 rounded-lg bg-gradient-to-r from-sky-800 to-indigo-500
        flex flex-col items-center
      '
      >
        <div className='flex items-center gap-2 mb-4'>
          <Image
            src='/images/betterside.png'
            height={40}
            width={40}
            alt='logo'
          />
          <h1 className='text-white text-xl font-bold'>Betterside</h1>
        </div>
        <h2 className='text-2xl text-center font-bold mb-1'>
          Your complete business toolkit 🧰
        </h2>
        <p className='mb-8 text-sm text-center max-w-[60ch]'>{` Personal project to streamline the journey from your idea to reality,
        providing solutions for solving only one problem: How to grow your
        business ?`}</p>

        <img
          src='/images/betterside-2.png'
          // layout='fill' // Use single quotes around 'fill' to avoid syntax issues
          // objectFit='contain'

          alt='project-image'
          className='w-[90%] md:w-[80%] h-[250px] overflow-hidden h-auto cover rounded-t-lg'
        />
      </section>
      <section className='shadow-sm bg-white rounded-lg p-8'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p>Date</p>
            <p className='font-bold'>Mar 20, 2024</p>
          </div>
          <div className='flex flex-col'>
            <p>Platform</p>
            <p className='font-bold'>Web Application</p>
          </div>
          <div className='flex flex-col'>
            <p>Website</p>
            <Link
              className='text-sky-500'
              href='https://www.betterside.fun/'
              target={'_blank'}
            >
              Visit Website
            </Link>
          </div>
        </div>
        <Separator className='my-8' />
        <div className=''>
          <h2 className='my-2 text-2xl font-semibold'>Project Overview</h2>
          <p className='text-slate-500 text-sm'>
            Our platform allows users to select and lock in the services they
            need at a fixed price, akin to ordering products on Amazon. By
            bringing the convenience and transparency of e-commerce to the
            service industry, we aim to simplify and streamline the client
            experience.
          </p>
          <h2 className='my-2 mt-8 text-2xl font-semibold'>Objectives</h2>
          <ol className='list-decimal	ml-8'>
            {objectives?.map((item, i) => (
              <li key={i} className='text-slate-500 text-sm mb-2'>
                <span className='font-bold'>{item.keyword}</span>
                {item.text}{' '}
              </li>
            ))}
          </ol>
          <h2 className='my-2 mt-8 text-2xl font-semibold'>Key Points</h2>
          <ol className='list-decimal	ml-8'>
            {keyPoints?.map((item, i) => (
              <li key={i} className='text-slate-500 text-sm mb-2'>
                <span className='font-bold'>{item.keyword}</span>
                {item.text}{' '}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* <section className='flex flex-col gap-4 text-center'>
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
      </main> */}
    </article>
  );
}

const objectives = [
  {
    keyword: 'Transparency:',
    text: ' Ensure clients have a clear understanding of service costs, deliverables, and timelines from the outset.',
  },
  {
    keyword: 'Convenience:',
    text: ' Offer a user-friendly platform where clients can browse, select, and purchase services with ease.',
  },
  {
    keyword: 'Fixed Pricing:',
    text: '  Provide a fixed pricing model to eliminate the uncertainty and variability often associated with service fees.',
  },
  {
    keyword: 'Convenience:',
    text: ' Guarantee high-quality service delivery through vetted professionals and standardized processes.',
  },
];

const keyPoints = [
  {
    keyword: 'Authentication using Clerk.js:',
    text: ` Clerk provided a very quick solution for authentication with 10,000 requests / month in the free-tier !!`,
  },
  {
    keyword: `Sanity CMS:`,
    text: ` Used Sanity CMS for updating and managing the content around the services offered.`,
  },
];
