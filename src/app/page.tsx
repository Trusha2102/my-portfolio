import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education/>
    </>
  );
}
