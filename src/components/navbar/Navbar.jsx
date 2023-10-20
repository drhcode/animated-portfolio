import { motion } from 'framer-motion';

import './navbar.scss';
import { Sidebar } from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DRH Code
        </motion.span>
        <div className='social'>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 0.5 }}
          >
            <img src='/facebook.png' alt='facebook' />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 0.5 }}
          >
            <img src='/instagram.png' alt='facebook' />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 0.5 }}
          >
            <img src='/linkedin.png' alt='linkedin' />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
