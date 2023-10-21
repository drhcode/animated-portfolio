import './hero.scss';
import { motion } from 'framer-motion';
import { heroImg } from '../../assets';

const textVariants = {
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

  scrollAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <motion.div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>Dorjan Çoçka</motion.h2>
          <motion.h1 variants={textVariants}>Software & Web Developer</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>See the latest projects</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} src='/scroll.png' alt='' animate='scrollAnimation' />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Software & Web Developer
      </motion.div>
      <div className='imageContainer'>
        <img src={heroImg} alt='' />
      </div>
    </motion.div>
  );
};

export default Hero;
