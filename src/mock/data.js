import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diogo Ribeiro | Software Engineering Student', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    "Hi! I'm Diogo and welcome to my personal website. Here you can find more about who I am and about what I do.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Diogo Ribeiro',
  subtitle: "I'm a Software Engineering Student.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ribeiro.jpg',
  paragraphOne:
    "Hi! My name is Diogo Ribeiro and I'm an Software Engineering student currently pursuing my Masters Degree ate the University of Minho, in Braga, Portugal.",
  paragraphTwo:
    'The best part of beeing a Software Engineering student is that everyday you learn something new and exciting, and that is what I love to do!',
  paragraphThree:
    'Some of my favourite subjects are Software Development, Data Sctructures, creating Algorithms, Information Processing, Web Development, and many others!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'heartbits20.png',
    title: 'HeartBits 2020',
    info:
      'This project consists in the Official Website for the 2020 HeartBits edition. This website was built for my student nucleus, CeSIUM, as part of my functions within the organization. This website was built using Jekyll.',
    info2: '',
    url: 'https://heartbits.pt/',
    repo: 'https://github.com/cesium/Heartbits2020',
  },
  {
    id: nanoid(),
    img: 'heartbits.png',
    title: 'HeartBits 2019',
    info:
      'This project consists in the Official Website for the 2019 HeartBits edition. This website was built for my student nucleus, CeSIUM, as part of my functions within the organization. This website was built using Jekyll.',
    info2: '',
    url: 'https://2019.heartbits.pt/',
    repo: 'https://github.com/cesium/Heartbits2019',
  },
  {
    id: nanoid(),
    img: 'dezembro.png',
    title: 'Dezembro Solidário 2019',
    info:
      'This project consists in the Official Website for the 2019 Dezembro Solidário edition. This website was built for my student nucleus, CeSIUM, as part of my functions within the organization, contributing to a charity event at University of Minho. This website was built using Jekyll.',
    info2: '',
    url: 'https://dezembrosolidario.cesium.di.uminho.pt/',
    repo: 'https://github.com/cesium/dezembro_solidario',
  },
  {
    id: nanoid(),
    img: 'codeweek.png',
    title: 'CodeWeek 2019',
    info:
      'This project consists in the Official Website for the 2019 CodeWeek edition. This website was built for my student nucleus, CeSIUM, as part of my functions within the organization. This website was built using Jekyll.',
    info2: '',
    url: 'https://codeweek.cesium.di.uminho.pt/',
    repo: 'https://github.com/cesium/codeweek19',
  },
  {
    id: nanoid(),
    img: 'sgr.png',
    title: 'Restaurant Management System',
    info:
      'This project was built as part of my 3rd year Software Engineering course as University of Minho. The main goal of this system is to serve as a daily operations system for any kind of restaurant.',
    info2:
      'The system allows to track and work with information such as employees and their schedules, goods, clients and their expenses, most wanted items in the menu, reservations, supply and stock management, and order registration in the mobile app. The backoffice and mobile app were built using C#.',
    url: '',
    repo: 'https://github.com/ribeiropdiogo/LI4',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ribeiropdiogo@gmai.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ribeiropdiogo/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ribeiropdiogo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ribeiropdiogo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
