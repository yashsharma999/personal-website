import Articles from '@/components/Articles';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import WorkExp from '@/components/WorkExp';
import { getAllPosts } from '@/lib/api';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <section className='flex flex-col lg:flex-row gap-8'>
      <ProfileCard />
      <div className='grow' id='main_wrapper'>
        <Projects />
        <WorkExp />
        <TechStack />
        {/* <Articles /> */}
      </div>
    </section>
  );
}
