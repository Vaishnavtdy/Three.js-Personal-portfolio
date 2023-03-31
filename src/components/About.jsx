import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
           flex justify-evenly items-center flex-=col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white font-bold text-center text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Know me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet. Et culpa nemo eos soluta cupiditate
        sed iusto galisum ex vero molestiae ex consequatur eius et beatae
        eligendi. Sed consequatur sint est facilis blanditiis cum ipsa nulla
        id consequatur magni est odio sunt et voluptates dolorum non deserunt
        explicabo. Qui ipsam provident aut corrupti error et minus fugit non
        dolor quae. Aut vitae alias et tenetur ipsam aut eveniet corrupti aut
        quas impedit non neque dolor rem omnis quisquam aut facere dolore?
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")