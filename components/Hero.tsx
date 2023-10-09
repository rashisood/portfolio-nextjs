"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image'


type Props = {}

export default function Hero({}: Props) {

    const[text,count]=useTypewriter({
        words: [
            "Hi, The Name's Rashi Sood",
            "Girl-who-loves-Coffee.tsx",
            "<But-Loves-To-Code-More/>",
        ],
        loop: true,
        delaySpeed:2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden xs:mb-[80px]'>
        <BackgroundCircles/>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://i.postimg.cc/2jvpR5d7/CC1-B25-B6-E950-431-C-804-D-95-B09-D091498-1-201-a.jpg" 
        alt="" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Web Developer
            </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
            <Link href="#about"><button className='heroButton'>About</button></Link> 
            <Link href="#skills"><button className='heroButton'>Skills</button></Link> 
            <Link href="#projects"><button className='heroButton'>Projects</button></Link> 
        </div>
        </div>
    </div>
  )
}