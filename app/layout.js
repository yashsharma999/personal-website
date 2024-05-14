import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yash Sharma',
  description: 'Personal website of Yash Sharma',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#f9f9f9]`}>
        <main className='max-w-5xl mx-auto p-8'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
