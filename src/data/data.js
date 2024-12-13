import React from 'react';
import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa'
import Kitchen from '../assets/Gerich.png'
import Royal from '../assets/Royal.png'
import Joker from '../assets/joker.jpg'
import Bank from '../assets/robot.png'
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
    title: 'Cowch',
    image: Joker,
    synopsis: 'A full-stack MERN project inspired by Netflix with login, Registration and password authentication. Connect to the IMDB API and watch the movie trailers ',
    liveDemo: 'https://afoghandi.github.io/cowch/',
    github: 'https://github.com/Afoghandi/cowch',
  },
  {
    id: 2,
    title: 'Gerich Kitchens',
    image:Kitchen,
    synopsis: 'A sleek portfolio showcasing projects and skills with React and CSS.',
    liveDemo: 'https://afoghandi.github.io/gerich/',
    github: 'https://github.com/Afoghandi/gerich',
  },

  {
    id: 3,
    title: 'Royal Tosh',
    image: Royal,
    synopsis: 'A static page using gradient that never fails to catch attention',
    liveDemo: 'https://royal-tosh.vercel.app/',
    github: 'https://github.com/Afoghandi/RoyalTosh',
  },
  {
    id: 4,
    title: 'Modern Bank',
    image: Bank,
    synopsis: 'A dynamic static web paged, designed using styled-component.',
    liveDemo: 'modern-bank-rosy.vercel.app',
    github: 'https://github.com/Afoghandi/ModernBank',
  }
 
];

export const experienceData = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Ageas Insurance',
    duration: 'July 2020 - Present',
    description: 'As an IT Developer at Ageas, I am responsible for designing, developing, and maintaining our comprehensive enterprise content management (ECM) OnBase system, OnBase, which is used to capture, manage, store, and retrieve documents while automating workflows and business processes. ',
  },
  {
    id: 2,
    title: 'Learning and Development Officer',
    company: 'Ageas Insurance',
    duration: 'September 2016 - July 2020',
    description: 'I was responsible for creating and delivering training programmes that were based around a blended approach to learning to ensure trainees receive an understanding of the core elements of their role and the fundamental believes of the company',
  },
  {
    id: 3,
    title: 'Motor Claims Technical Advisor',
    company: 'Ageas Insurance',
    duration: 'June 2014 - September 2016',
    description: 'As a technical advisor, I served as a referral point for foreign claims, theft, credit hire and as a telematics expert, which enabled me to support, guide and offer solutions to others. I reviewed outstanding debts and negotiated with external clients to reach an amicable resolution, which involved collating and analysing data, analysing the behaviour patterns  and applying this knowledge to future cases. ',
  },
  {
    id:4 ,
    title: 'Customer Service Advisor',
    company: 'Ageas Insurance',
    duration: 'April 2012 - June 2014',
    description: 'I worked within the Affinity Sales department where I dealt with high volumes of calls.  I was responsible for listening to clients and assisting them in finding a product that met their needs whilst ensuring they received an individualised pleasant experience.  ',
  },
  {
    id:5 ,
    title: 'Design Consultant',
    company: 'Venture Photography',
    duration: 'August 2011 - December 2011',
    description: 'Venture was all about providing customers with a complete experience.  I was responsible for leading clients through their images and ensuring they had a positive experience whilst they choose their pictures.  My role included sales, digital image manipulation to meet the customers requirements and also ensuring images were ready for collection.  I was also responsible for phoning clients, arranging appointments and covering the Reception desk in the studio.  ',
  },
];


export const footerLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/four__meta/profilecard/?igsh=MWw3ZzRjOHZjamR4eg==',
    icon: <FaInstagram />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/afo-omo-oshun-01b401140?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedin />,
  },
  
];