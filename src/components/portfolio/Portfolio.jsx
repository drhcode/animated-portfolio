import { works } from '../constants/constants';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import './portfolio.scss';

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <motion.div className='imageContainer' ref={ref}>
            <motion.img src={item.img} alt='' whileHover={{ border: '2.5px solid #785115' }} />
          </motion.div>
          <motion.div className='textContainer' style={{ y }}>
            <ul className='stack'>
              {item.stack.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.url}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Latest Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {works.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
