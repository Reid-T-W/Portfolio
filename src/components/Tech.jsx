import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>
          Technologies
        </h2>
      </motion.div>
      <div className="w-full h-96">
        <BallCanvas />
      </div>
      {/* <div className="flex flex-row flex-wrap justify-center
        gap-10">
          {technologies.map((technology) => (
            <div key={technology.name} className="flex flex-col justify-center text-center items-center">
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon}/>
              </div>
              <p>{technology.name}</p>
            </div>
          ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(Tech, "");