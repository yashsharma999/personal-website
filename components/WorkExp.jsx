import { workExp } from '@/lib/contants';
import Image from 'next/image';
import React from 'react';
import { Separator } from './ui/separator';
import shiryam from '@/assets/images/shiryam_logo.jpeg';
import fld from '@/assets/images/fld.jpeg';
import Link from 'next/link';

export default function WorkExp() {
  return (
    <section className='mb-8'>
      <div className='mb-8'>
        <h1 className='text-2xl font-semibold'>Work Experience</h1>
        <h2 className='text-base text-slate-500 '>
          Work experience of 3+ years
        </h2>
      </div>
      <div className='shadow-sm bg-white rounded-lg px-8'>
        {workExp.map((item, i) => (
          <>
            <WorkExpBox data={item} key={i} />
            {i !== workExp.length - 1 && <Separator />}
          </>
        ))}
      </div>
    </section>
  );
}
//https://www.linkedin.com/company/fastlanedevs/mycompany/
const WorkExpBox = ({ data }) => {
  return (
    <div className='flex gap-6  py-8'>
      <div id='logo' className='mt-1  h-[40px] w-[40px]'>
        <Link
          target={'_blank'}
          href={
            data?.name === 'Fastlane Devs'
              ? 'https://www.linkedin.com/company/fastlanedevs/mycompany/'
              : '#'
          }
        >
          <Image
            src={data?.name === 'Fastlane Devs' ? fld : shiryam}
            alt='logo'
            className='rounded-sm'
          />
        </Link>
      </div>
      <div
        id='info'
        className='grow flex flex-col gap-4 sm:flex-row items-start justify-between'
      >
        <div>
          <Link
            target={'_blank'}
            href={
              data?.name === 'Fastlane Devs'
                ? 'https://www.linkedin.com/company/fastlanedevs/mycompany/'
                : '#'
            }
          >
            <p className='font-bold'>{data?.name ?? ''}</p>
          </Link>
          <p className='font-light text-slate-500 '>{data?.role ?? ''}</p>
        </div>
        <div className='font-light text-slate-500 '>{data?.duration}</div>
      </div>
    </div>
  );
};
