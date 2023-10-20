import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const ItemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ['Homepage', 'Services', 'Portfolio', 'About', 'Contact'];

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          key={index}
          variants={ItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
