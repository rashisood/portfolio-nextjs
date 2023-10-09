"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky p-5 top-0 flex 
    items-start justify-between max-w-7xl mx-auto
    xl:items-center '>
        <motion.div 
        initial={
            {
                x:-500,
                opacity:0,
                scale:0.5,
            }
        }
        animate={
            {
                x:0,
                opacity:1,
                scale:1,
            }
        }
        transition={{
            duration:1.5,
        }}
        className='
        flex flex-row items-center
        '>
        <SocialIcon url="http://github.com/rashisood" 
        fgColor='grey'
        bgColor='transparent'
        />
        <SocialIcon url="http://linkedin.com/in/rashi-sood-274b48246" 
        fgColor='grey'
        bgColor='transparent'
        />
        {/* <SocialIcon url="http://youtube.com/sonnysangha" 
        fgColor='grey'
        bgColor='transparent'
        /> */}
        </motion.div>
        
        <motion.div
        initial={
            {
                x:500,
                opacity:0,
                scale:0.5,
            }
        }
        animate={
            {
                x:0,
                opacity:1,
                scale:1,
            }
        }
        transition={
            {
                duration:1.5,
            }
        }
        className='flex flex-row items-center text-gray-300 cursor-pointer gap-5'>
            <div> <a className='flex uppercase items-center md:inline-flex text-sm text-gray-400' href='/assets/Rashi Sood.pdf' download> <img width="32" height="32" src="https://img.icons8.com/pastel-glyph/64/737373/download--v1.png" alt="download--v1"/> Download CV </a> </div>
            <Link href='#contact'>
            <div><SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'
            href='mailto:rashisood6175@gmail.com'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get in Touch
            </p>
            </div>
        </Link>
        </motion.div>
    </header>
  )
}