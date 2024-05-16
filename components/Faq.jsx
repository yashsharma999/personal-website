import { faq } from '@/lib/contants';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function Faq() {
  const [current, setCurrent] = useState(0);

  return (
    <div className='bg-white shadow-sm p-8 rounded-lg my-8'>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-lg font-bold'>{`FAQ's`}</h1>
        <ToggleButtons
          current={current}
          setCurrent={setCurrent}
          max={faq.length - 1}
        />
      </div>
      {faq.map((item, i) => (
        <div
          key={i}
          className={cn(`flex flex-col gap-2`, { hidden: i !== current })}
        >
          <p className='text-sm font-semibold text-slate-500'>
            {item.question}
          </p>
          <p className='text-2xl font-semibold'>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

const ToggleButtons = ({ current, setCurrent, max }) => {
  return (
    <div className='flex gap-2'>
      <Button
        onClick={() => {
          setCurrent((p) => (p !== 0 ? p - 1 : p));
        }}
        className={cn(
          'text-xl text-black hover:text-white shadow-sm border-[1px] border-slate-100 flex justify-center items-center bg-white hover:bg-black transition ease-in'
        )}
        disabled={current === 0}
      >
        {'<'}
      </Button>
      <Button
        onClick={() => {
          setCurrent((p) => (p !== max ? p + 1 : p));
        }}
        className='text-xl hover:scale-90 transition ease-in-out delay-100 shadow-sm  flex justify-center items-center '
        disabled={current === max}
      >
        {'>'}
      </Button>
    </div>
  );
};
