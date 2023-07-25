import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { socials, portfolio } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ index, title, icon, source_link }) => {
  let navigate = useNavigate();
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
                   rounded-[20px] shadow-card"
      >

        <div 
          onClick= {title!='Gmail'? () => window.open(source_link, "_blank") : ""}
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[10px] p-5 px-12
          min-h-[100px] flex justify-evenly items-center
          flex-col"
          >
            <img src={icon} alt={title} className="w-10 h-10
            object-contain" />
            {/* <h4 className="text-white text-10px
            text-center">{title}</h4> */}
        </div>

      </motion.div>
    </Tilt>
  )
}


const PortfolioCard = ({ index, title, icon, source_link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
                   rounded-[20px] shadow-card"
      >
        <div
          onClick={() => window.open(source_link, "_blank")}
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[10px] p-5 px-12
          min-h-[280px] flex justify-evenly items-center
          flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16
            object-contain" />
            <h3 className="text-white text-20px
            font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
        I’m an all rounded person that loves
        learning. I started out my career as
        a research assistant in the civil 
        engineering sector, but my deep passion 
        for tech led me to pursue my master’s
        in software engineering at HiLCoE School
        of Computer Science and Technology, I 
        also enrolled in one of the most intensive
         bootcamps out there, the ALX Software 
         Engineering bootcamp where I got to 
         specialize in backend engineering, so 
         it’s not only software engineering 
         skills I bring to the table, but also 
         research and multi-tasking skills. 
      </motion.p>
      <div className="mt-20">
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {
            portfolio.map((singlePortfolio, index) => (
            <PortfolioCard key={singlePortfolio.title} index={index} 
            {...singlePortfolio} />
            ))
          }

        </div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {
            socials.map((service, index) => (
            service.title != "Gmail"? 
              <ServiceCard key={service.title} index={index}
              {...service} /> :
              <a key={service.title} href={service.source_link}>
                <ServiceCard key={service.title} index={index}
                {...service} />
              </a>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")