import Image from 'next/image';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <section className='flex gap-8'>
      <ProfileCard />
      <div className='grow' id='main_wrapper'>
        <h1 className='text-2xl font-semibold'>Latest Projects</h1>
      </div>
    </section>
  );
}
