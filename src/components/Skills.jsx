import React from 'react';
import { providerDB } from '../db/Provider';

const Skills = () => {
  const { skills } = providerDB();
  return (
    <section id='skills' className='p-10  bg-gray-800 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>
          Mis <span className='text-cyan-600'>Habilidades</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>MI conocimiento</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {skills?.map((skill, i) => (
            <div
              key={i}
              className='border-2 group border-cyan-600 relative min-w-[8rem] max-w-[13rem] bg-gray-900 p-5 rounded-xl'
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className='w-32 h-32 flex items-center justify-center rounded-full'
              >
                <div className='text-6xl w-28 h-28 bg-gray rounded-full flex items-center justify-center group-hover:text-cyan-600'>
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className='text-xl mt-3'>{skill.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
