import React from 'react';
import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa'
import Kitchen from '../assets/Gerich.png'
import Royal from '../assets/Royal.png'
import Joker from '../assets/joker.jpg'
// skillsData.js
const skills = [
  { name: 'C#', iconClass: 'devicon-csharp-plain' },
  { name: 'React', iconClass: 'devicon-react-original' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain' },
  { name: 'Express', iconClass: 'devicon-express-original' },
  { name: 'SQL', iconClass: 'devicon-mysql-plain' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
  { name: 'CSS', iconClass: 'devicon-css3-plain' },
  { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain' },
  { name: 'MUI', iconClass: 'devicon-materialui-plain' },
  { name: 'Java', iconClass: 'devicon-java-plain' },
];

export default skills;

export const projects = [
  {
    id: 1,
    title: 'Gerich Kitchens',
    image:Kitchen,
    synopsis: 'A sleek portfolio showcasing projects and skills with React and CSS.',
    liveDemo: 'https://afoghandi.github.io/gerich/',
    github: 'https://github.com/Afoghandi/gerich',
  },
  {
    id: 2,
    title: 'Cowch',
    image: Joker,
    synopsis: 'A full-stack MERN project inspired by Netflix with login, Registration and password authentication. Connect to the IMDB API and watch the movie trailers ',
    liveDemo: 'https://afoghandi.github.io/cowch/',
    github: 'https://github.com/Afoghandi/cowch',
  },
  {
    id: 3,
    title: 'Blog Platform',
    image: Royal,
    synopsis: 'A static page using modern design that never fails to catch attention',
    liveDemo: 'https://royal-tosh.vercel.app/',
    github: 'https://github.com/Afoghandi/RoyalTosh',
  },
  {
    id: 4,
    title: 'Netflix',
    image: 'https://via.placeholder.com/300',
    synopsis: 'A dynamic blog platform built with Node.js, Express, and MongoDB.',
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/blog-platform',
  },
  {
    id: 5,
    title: 'Netflix',
    image: 'https://via.placeholder.com/300',
    synopsis: 'A dynamic blog platform built with Node.js, Express, and MongoDB.',
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/blog-platform',
  },
  {
    id: 6,
    title: 'Netflix',
    image: 'https://via.placeholder.com/300',
    synopsis: 'A dynamic blog platform built with Node.js, Express, and MongoDB.',
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/blog-platform',
  },
];

export const experienceData = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'TechCorp',
    duration: 'Jan 2020 - Dec 2022',
    description: 'Developed and maintained web applications using React, Node.js, and MongoDB.',
  },
  {
    id: 2,
    title: 'Junior Developer',
    company: 'CodeFactory',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Assisted in building scalable backend systems with Express and SQL databases.',
  },
  {
    id: 3,
    title: 'Intern',
    company: 'Startup Hub',
    duration: 'Jan 2018 - May 2018',
    description: 'Collaborated with senior developers on designing user-friendly interfaces.',
  },
];


export const footerLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
];