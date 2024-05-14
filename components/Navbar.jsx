import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import twitter from '@/assets/icons/twitter.svg';
import github from '@/assets/icons/github.svg';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center mb-8'>
      <Link href={'mailto:syash5575@gmail.com'} className='font-bold'>
        syash5575@gmail.com
      </Link>
      <div className='flex gap-4 items-center'>
        <Link href={'https://twitter.com/5273Yash'} target='_blank'>
          <Image src={twitter} height={16} width={16} alt='twitter' />
        </Link>
        <Link href={'https://github.com/yashsharma999'} target='_blank'>
          <Image src={github} height={16} width={16} alt='github' />
        </Link>
      </div>
    </nav>
  );
}
