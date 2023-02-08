// import { content } from '../Content';
import aboutImg from '../assets/images/Hireme/contacto.png';

const Hireme = () => {
  // const { Hireme } = content;

  return (
    <section className='bg- dark_primary' id='contact'>
      <div className='md:container px-5 pt-14'>
        <h2 className='title' data-aos='fade-down'>
          Contactame
        </h2>
        <h4 className='subtitle text-sm' data-aos='fade-down'>
          puedes contactarme a traves de mis redes sociales
        </h4>
        <br />
        <div className='flex items-center md:flex-row flex-col-reverse '>
          <img
            src={aboutImg}
            alt='...'
            data-aos='fade-right'
            className='max-w-sm lg:block hidden'
          />

          <div
            data-aos='fade-left'
            className='
           p-1 mb-10 py-5 px-5 bg-dark_secundary  rounded-xl'
          >
            <div className=' flex flex-wrap items-center justify-center '>
              <a
                href='mailto:hidan9292@gmail.com'
                target={'_blank'}
                className='border border-cyan-600 bg-dark_primary p-5 mr-5 mb-5 rounded cursor-pointer block  md:min-w-min'
              >
                <div className='text-6xl w-20 h-20 bg-gray hover:bg-cyan-500 rounded-full flex items-center justify-center '>
                  <ion-icon name='mail-outline'></ion-icon>
                </div>

                {/* <h4>email</h4> */}
              </a>
              <a
                href='https://www.linkedin.com/in/hidan21/'
                target={'_blank'}
                className='border border-cyan-600 p-5 mr-5 mb-5 rounded cursor-pointer block bg-dark_primary'
              >
                <div className='text-6xl w-20 h-20 bg-gray  hover:bg-cyan-500 rounded-full flex items-center justify-center '>
                  {' '}
                  <ion-icon name='logo-linkedin'></ion-icon>
                </div>
                {/* <h4>linkedin</h4> */}
              </a>
              <a
                href='https://www.instagram.com/hidan_dev/'
                target={'_blank'}
                className='border border-cyan-600 p-5 mr-5 mb-5 rounded cursor-pointer block bg-dark_primary'
              >
                <div className='text-6xl w-20 h-20 bg-gray hover:bg-cyan-500 rounded-full flex items-center justify-center '>
                  <ion-icon name='logo-instagram'></ion-icon>
                </div>
                {/* <h4>intsgram</h4> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
