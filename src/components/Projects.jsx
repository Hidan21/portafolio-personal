import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { providerDB } from '../db/Provider';
import aboutImg from '../assets/images/Hero/person1.png';

const Projects = () => {
  const { projects } = providerDB();
  return (
    <section id='projects' className='py-10 text-white bg-dark_secundary'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold' data-aos='fade-down'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg' data-aos='fade-down'>
          My awesome works
        </p>
      </div>
      <br />
      <div className='flex max-w-6xl gap-6 px-5 mx-auto items-center relative'>
        <div className='lg:w-2/3 w-full'>
          <Swiper
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div
                  className='h-fit w-full p-4 bg-dark_primary rounded-xl w-90'
                  data-aos='flip-left'
                >
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    className='rounded-lg'
                  />
                  <h3 className='text-xs my-4'>{project_info.name}</h3>
                  <div className='flex gap-3 mb-3'>
                    <a
                      href={project_info.github_link}
                      target='_blank'
                      className='text-cyan-600 bg-dark_secundary px-2 py-1 inline-block rounded-xl'
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target='_blank'
                      className='text-cyan-600 bg-dark_secundary px-2 py-1 inline-block rounded-xl'
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
          <div className='lg:w-50 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg  '>
            <img
              src={aboutImg}
              alt=''
              className='w-full object-cover  rounded-xl'
              data-aos='fade-up'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
