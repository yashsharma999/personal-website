import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Separator } from './ui/separator';

export default function Projects() {
  return (
    <section className='mb-8'>
      <div className='mb-8'>
        <h1 className='text-2xl font-semibold'>Latest Projects</h1>
      </div>
      <div className='shadow-sm bg-white rounded-lg p-8'>
        {projectsList.map((item, i) => (
          <>
            <ProjectBox data={item} key={i} />
            {i !== projectsList.length - 1 && <Separator />}
          </>
        ))}
      </div>
    </section>
  );
}

const ProjectBox = ({ data }) => {
  return (
    <div className='flex gap-6  py-8'>
      <div id='logo' className='mt-1 relative h-[40px] w-[40px]'>
        <Image
          height={200}
          width={200}
          src={data?.image ? data?.image : ''}
          alt='logo'
          className='rounded-sm'
        />
      </div>
      <div
        id='info'
        className='grow flex flex-col gap-4 sm:flex-row items-start justify-between'
      >
        <div>
          <Link
            href={data?.link}
            className='flex items-center gap-1 font-bold hover:text-sky-500 transition ease-in delay-50 duration-150'
            target={'_blank'}
          >
            {data?.title ?? ''}
            <sup>
              <Image
                src={'/icons/open.svg'}
                height={12}
                width={12}
                alt='open project'
              />
            </sup>
          </Link>

          <p className='font-light text-slate-500 '>
            {data?.description ?? ''}
          </p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {data?.tags.map((tag, i) => (
              <TagBlock tag={tag} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TagBlock = ({ tag }) => {
  return (
    <div
      className={`w-fit text-sm px-2 py-1 rounded-sm ${tag.bgColor} ${tag.textColor}`}
    >
      {tag.title}
    </div>
  );
};

const projectsList = [
  {
    title: 'BetterSide',
    description: `Services as an ecommerce platform.`,
    tags: [
      {
        title: 'Fullstack development',
        textColor: 'text-sky-700',
        bgColor: 'bg-sky-100',
      },
      {
        title: 'Sanity',
        textColor: 'text-rose-700',
        bgColor: 'bg-rose-100',
      },
    ],
    dateOfCompletetion: 'In progress',
    link: `https://www.betterside.fun/`,
    slug: '#',
    image: '/images/betterside.png',
  },
];
