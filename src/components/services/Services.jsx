import './services.scss';
import { motion, useInView } from 'framer-motion';
import { services } from '../constants/constants';
import { useRef } from 'react';

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-200px' });
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I Focus on helping your brand <br /> and move <b>FORWARD</b>
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/services.png' />
          <h1>
            <motion.b whileHover={{ color: '#785115', cursor: 'wait' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: '#785115', cursor: 'wait' }}>for Your</motion.b> Business
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        {services.map((service) => (
          <motion.div variants={variants} className='box' key={service.id}>
            <img src={service.icon} />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <motion.button whileHover={{ background: 'white', color: 'black' }}>
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
