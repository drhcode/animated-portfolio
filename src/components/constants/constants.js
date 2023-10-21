// Services
import {
  branding,
  web,
  mobile,
  coding,
  ester,
  boci,
  dims,
  gardenbau,
  lajmisot,
} from '../../assets/index';

const services = [
  {
    id: 1,
    title: 'Branding',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    icon: branding,
  },
  {
    id: 2,
    title: 'Software Development',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    icon: coding,
  },
  {
    id: 3,
    title: 'Web Development',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    icon: web,
  },
  {
    id: 4,
    title: 'Mobile App Development',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    icon: mobile,
  },
];

const works = [
  {
    id: 1,
    title: 'DIMS Hotel',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    stack: ['Wordpress', 'Javascript', 'PHP'],
    img: dims,
    url: 'http://dimshotel.al/',
  },
  {
    id: 2,
    title: 'B.S.L Security',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    stack: ['React', 'Javascript', 'Node Js'],
    img: boci,
    url: 'http://boccisecurity.lu/',
  },
  {
    id: 3,
    title: 'Villa Ester',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    stack: ['Wordpress', 'Javascript', 'PHP'],
    img: ester,
    url: 'http://villaester.al/',
  },
  {
    id: 4,
    title: 'Gardenbau SRL',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    stack: ['React', 'Javascript', 'Node Js'],
    img: gardenbau,
    url: 'http://gardenbau.lu/',
  },
  {
    id: 5,
    title: 'Lajmi Sot',
    desc: 'lorem ipsum dolor sit amet, consectetur',
    stack: ['Wordpress', 'Javascript', 'PHP'],
    img: lajmisot,
    url: 'http://lajmisot.al/',
  },
];

export { services, works };
