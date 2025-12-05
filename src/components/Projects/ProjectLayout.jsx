import React from 'react'
import { motion } from 'framer-motion'
import ChromaGrid from './Projects'

const ProjectLayout = () => {
  return (
    <div className='max-w-6xl mx-auto py-8'>
      <motion.h2
        className='text-5xl text-center uppercase my-6 font-bold text-blue-300'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        MY Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      >
        <ChromaGrid />
      </motion.div>
    </div>
  )
}

export default ProjectLayout
