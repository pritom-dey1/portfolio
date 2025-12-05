import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../ProfileCard';
import { AboutContent } from './AboutContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const About = () => {
  return (
    <div id="about">
      <motion.div
        className="max-w-6xl py-10 mx-auto text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl text-center uppercase my-10 font-bold text-blue-300"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="flex flex-col md:flex-row gap-10 items-center md:items-start"
          variants={containerVariants}
        >
          <motion.div className="md:w-1/3 w-full flex justify-center" variants={itemVariants}>
            <ProfileCard />
          </motion.div>

          <motion.div className="md:w-2/3 w-full text-left pl-10 md:text-left md:pl-0" variants={itemVariants}>
            <AboutContent />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
