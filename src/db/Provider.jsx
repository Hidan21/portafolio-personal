import { v4 as uuidv4 } from 'uuid';
import imgHero from '../assets/images/Hero/hero.png';
import Proyecto1 from '../assets/images/Projects/proyecto1.png';
import Proyecto2 from '../assets/images/Projects/proyecto2.png';
import Proyecto3 from '../assets/images/Projects/proyecto3.png';
import Proyecto4 from '../assets/images/Projects/proyecto4.png';
import Proyecto5 from '../assets/images/Projects/proyecto5.png';
import { createContext, useContext } from 'react';

const GlobalContext = createContext();

const bdd = {
  menuLinks: [
    { id: uuidv4(), name: 'INICIO', link: '#home' },
    { id: uuidv4(), name: 'SOBRE MI', link: '#about' },
    { id: uuidv4(), name: 'HABILIDADES', link: '#skills' },
    { id: uuidv4(), name: 'PROYECTOS', link: '#projects' },
    { id: uuidv4(), name: 'CONTACTO', link: '#contact' },
  ],
  hero: {
    title: 'Front-End Developer',
    firstName: 'DANIEL',
    LastName: 'GIl',
    github: 'https://github.com/Hidan21',
    likedin: 'https://www.linkedin.com/in/hidan21/n',
    img: imgHero,
    hero_content: [
      { id: uuidv4(), name: 'Desarrollo', subname: 'web', link: '#' },
      { id: uuidv4(), name: 'Responsive ', subname: 'Design', link: '#' },
    ],
  },

  skills: [
    {
      logo: 'logo-html5',
      nombre: 'HTML5',
      count: 100,
    },
    {
      logo: 'logo-css3',
      nombre: 'CCS3',
      count: 100,
    },
    {
      logo: 'logo-sass',
      nombre: 'SASS',
      count: 100,
    },
    {
      logo: 'logo-javascript',
      nombre: 'JAVASCRIPT',
      count: 100,
    },

    {
      logo: 'logo-react',
      nombre: 'REACT.JS',
      count: 100,
    },

    {
      logo: 'logo-github',
      nombre: 'GIT Y GITHUB',
      count: 100,
    },
    {
      logo: 'logo-firebase',
      nombre: 'FIRE-BASE',
      count: 100,
    },
    {
      logo: 'logo-firebase',
      nombre: 'NODE.JS BASIC',
      count: 100,
    },
  ],
  projects: [
    {
      img: Proyecto1,
      name: 'Clon Twetter (html css javascript)',
      github_link: 'https://github.com/Hidan21/clon-twitter',
      live_link: 'https://conetwitter-5zw7ybmkk-hidan21.vercel.app/',
    },
    {
      img: Proyecto2,
      name: 'tesla-Roadster  (html css javascript)',
      github_link: 'https://github.com/Hidan21/tesla-Roadster',
      live_link: 'https://tesla-roadster-pied.vercel.app/',
    },
    {
      img: Proyecto3,
      name: 'Buscaro De Imagenes  (html css javascript)',
      github_link: 'https://github.com/Hidan21/buscador-pixabay',
      live_link: 'https://pixabay-jo9jkhh75-hidan21.vercel.app/',
    },
    {
      img: Proyecto4,
      name: 'app de clima (react js, css, axios)',
      github_link: 'https://github.com/Hidan21/clima-app-reactjs',
      live_link: 'https://hidan21.github.io/clima-app-reactjs/',
    },
    {
      img: Proyecto5,
      name: 'imdb peliculas (firebase, React, Styled-Componend)',
      github_link: 'https://github.com/Hidan21/imdb',
      live_link: 'https://hidan21.github.io/imdb/',
    },
  ],
};

const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={bdd}>{children}</GlobalContext.Provider>
  );
};

export const providerDB = () => {
  return useContext(GlobalContext);
};

export default Provider;
