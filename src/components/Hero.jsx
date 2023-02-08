// import content
import { providerDB } from '../db/Provider';

const Hero = () => {
  const { hero } = providerDB();

  return (
    <section id='home' className='overflow-hidden'>
      <div className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center'>
        <div
          data-aos='slide-left'
          data-aos-delay='1200'
          className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10'
        >
          <h1 className='rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]'>
            {hero.firstName}{' '}
            <span className='text-dark_primary'>{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className='pb-16 px-6 pt-5' data-aos='fade-down'>
          <h2>{hero.title}</h2>
          <br />
          <div className='flex justify-end'>
            <h4 className='text-lg hidden lg:block'>visita mi perfil </h4>
            <a
              href={hero.github}
              target={'_blank'}
              className='btn text-white/60 hover:text-cyan-600 hover:bg-dark_secundary'
            >
              Github
            </a>
            <a
              href={hero.likedin}
              target={'_blank'}
              className='btn text-white/60 hover:text-cyan-600 hover:bg-dark_secundary'
            >
              Linkedin
            </a>
          </div>
          <div className='flex flex-col gap-10 mt-10'>
            {hero.hero_content.map((content, i) => (
              <div
                key={content.id}
                data-aos='fade-down'
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && ' flex-row-reverse text-right'}  `}
              >
                <h4>{content.name}</h4>
                <p>{content.subname}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className='md:h-[37rem] h-96'>
          <img
            src={hero.img}
            data-aos='slide-up'
            alt='...'
            className='h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
