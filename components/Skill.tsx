import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    link?:string;
    n?:string;
}

export default function Skill({link,n}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            opacity:0
        }}
        transition={{
            duration:3,
        }}
        whileInView={{
            opacity:1,
           
        }}
       
        src={link}
        className='rounded-full border border-gray-500 object-cover  xs:h-12 xs:w-12  md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out '
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  xs:h-12 xs:w-12 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full '>
                <p className='text-xl font-bold text-black opacity-100'>{n}</p>
            </div>
        </div>
    </div>
  )
}