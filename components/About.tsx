"use client"
import React from 'react'
import { motion } from 'framer-motion'
import rashi from '../public/rashi.jpg'


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xs:top-20'>
        About
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        viewport={{once:true}}
        src={'rashi.jpg'}
        width={56}
        height={56}
        className='-mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover
        xs:w-40 xs:h-40 xs:mt-[50px]
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]'
        /> 

        <div className='space-y-10 px-0 md:px-10 xs:space-y-5 mt-[20px]'>
            <h4 className='text-4xl font-semibold xs:text-2xl'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
            <p className='text-base xs:text-sm'>
               Hi, My name is Rashi Sood, a student pursuing Masters In Computer Applications from Panjab University, Chandigarh. 
               I have solid experience in Front-end Web Development and am well acquainted with Technologies like- MERN Stack, JavaScript, Tailwind, Reactjs, Redux, Nextjs, PHP, C/C++, java, python, SQL, problem solving using Data Structures and continuosly expanding my knowledge.
            </p>
            </div>
    </motion.div>
  )
}
