import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Experience from '../components/sections/Experience';
import Activities from '../components/sections/Activities';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      {/* <Skills /> */}
      <Projects />
      {/* <Certifications /> */}
      <Experience />
      <Activities />
      <Achievements />
      <Contact />
    </>
  );
}
