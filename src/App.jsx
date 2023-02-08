// import components
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hireme from './components/Hireme';
import { useEffect } from 'react';
// Animation package
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile',
    });
  }, []);
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hireme />
      <footer className='p-3 text-center bg-dark_secundary'>
        <h6 className='mb-3 text-cyan-700'>DANIEL GIL</h6>
        <p>hidan9292@gmail.com © All CopyRights Reserved </p>
      </footer>
    </div>
  );
};

export default App;
