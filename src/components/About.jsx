import React from 'react';
import aboutImg from '../assets/images/Sobremi/sobre.png';
const About = () => {
  return (
    <section id='about' className='py-10 text-white bg-dark_secundary '>
      <div className='text-center mt-8 '>
        <h3 className='text-4xl font-semibold' data-aos='fade-down'>
          Sobre <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg' data-aos='fade-down'>
          Mi introduccion
        </p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto '>
          <div className='p-2'>
            <div className='text-gray-300 my-3' data-aos='fade-right'>
              <p className='text-center leading-7 w-11/12 mx-auto'>
                ¡Hola! Me llamo Daniel Empecé a estudiar de forma autodidacta
                Desarrollo web enfocándome principalmente en HTML, CSS y
                Javascript, y tecnologías asociadas como react.js, sass, git,
                entre otras he realizado varios proyecto con el fin de mostrar
                las habilidades adquiridas como desarrollador Front-End.
              </p>

              <br />
              <br />
              <a
                href='https://drive.google.com/file/d/1MMXl7DJavJ24vORtTLnlsrR9-W5hcZ45/view?usp=sharing'
                target='_blank'
              >
                <button className='btn '>Descargar CV</button>
              </a>
            </div>
          </div>
          <div
            className='flex-1 md:mt-0 mt-6 flex justify-center items-center z-50'
            data-aos='zoom-in-up'
          >
            <div className='lg:w-80 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg  '>
              <img
                src={aboutImg}
                alt=''
                className='w-full  object-cover rounded-xl bg-primaryLinear'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
