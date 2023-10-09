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
            x:200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:0.75
        }}
        src={link}
        className='rounded-full border border-gray-500 w-[40px] h-10 md:w-28 md:h-28 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out '
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-30 xl:h-30 rounded-full z-0 xs:hidden'>
            <div className='flex items-center justify-center h-full'>
                <div className='text-xl font-bold text-black opacity-100'>{n}</div>
            </div>
        </div>
    </div>
  )
}