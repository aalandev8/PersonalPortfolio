import Image from 'next/image';
import Hero from '@/components/Hero/HeroSection';
import AboutMe from '@/components/About/AboutMe';
import Portfolio from '@/components/Portfolio/Portfolio';

export default function Home() {
  return (
     <main className='main'>
      <Hero />
      <AboutMe />
      <Portfolio />
      </main>     
      
      
    
   
  )
}
