import React from 'react';
import { getProjectSlugs } from '@/lib/api';
import Sidebar from './projects/components/Sidebar';

export default function ProjectLayout({ children }) {
  const projectSlugs = getProjectSlugs();

  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <Sidebar slugs={projectSlugs} />
      <div className='grow'>{children}</div>
    </div>
  );
}
