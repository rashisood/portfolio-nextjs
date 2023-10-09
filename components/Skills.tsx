"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'


type Props = {}

export default function Skills({}: Props) {

  const skills=[
    {url:"https://img.icons8.com/color/999/javascript--v1.png",name:"JavaScript"},
    {url:"https://img.icons8.com/plasticine/999/react.png",name:"Reactjs"},
    {url:"https://img.icons8.com/color/999/tailwind_css.png",name:"TailWind"},
    {url:"https://img.icons8.com/color/999/redux.png",name:"Redux"},
    {url:"https://img.icons8.com/stickers/999/php-server.png",name:"PHP"},
    {url:"https://img.icons8.com/fluency/999/nextjs.png",name:"Nextjs"},
    {url:"https://img.icons8.com/color-glass/999/bootstrap.png" ,name:"BootStrap"},
    {url:"https://img.icons8.com/color/999/html-5--v1.png",name:"HTML"},
    {url:"https://img.icons8.com/color/999/css3.png",name:"CSS"},
    {url:"https://img.icons8.com/external-flat-andi-nur-abdillah/999/external-Data-Structure-artificial-intelligence-(flat)-flat-andi-nur-abdillah.png",name:"SQL"},
    {url:"https://img.icons8.com/fluency/999/c-programming.png",name:"C"},
    {url:"https://img.icons8.com/fluency/999/c-plus-plus-logo.png",name:"C++"},
    {url:"https://img.icons8.com/fluency/999/java-coffee-cup-logo.png",name:"Java"},
    {url:"https://img.icons8.com/plasticine/999/oracle-pl-sql--v3.png",name:"DSA"},
    {url:"https://img.icons8.com/color/999/linux--v1.png",name:"Linux"},

]
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col text-center xs:max-w-[80vw] md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm xs:hidden'>
            Hover over a skill to know more
        </h3>

        <div className=' absolute top-56 grid grid-cols-5 gap-5 xs:grid-cols-3'>
            {
              skills.map((skill,idx)=>(
              <div  key={idx}>
                <Skill
                link={skill.url}
                n={skill.name}
                />
              </div>))
            }
        </div>
    </motion.div>
  )
}