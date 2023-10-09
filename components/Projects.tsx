"use client"
import React from 'react';
import { motion } from "framer-motion"
import courses from '../public/courses.jpeg'
import youtube from '../public/youtube.jpeg'
import discord from '../public/discord.jpeg'
import dev from '../public/dev.jpeg'
import login from '../public/login.jpeg'
import razor from '../public/razor.jpeg'
import weather from '../public/weather.jpeg'
import testimonial from '../public/testimonial.jpeg'
import shopping from '../public/shopping.jpeg'
import chair from '../public/chair.jpeg'



type Props = {}

export default function Projects({}: Props) {

    const projects = [
        {title:"YouTube Clone",
            description:"Created using Reactjs and Tailwind and powered by an API, this is a fully functional YouTube clone, through which any video can be searched for and played. Video Likes, Channel Details and Suggested Videos are a cherry on top.", 
            url:"https://youtube-like1.netlify.app/",
            img:'youtube.jpeg'
        },
        {title:"Shopping App",
            description:"Created using ReactJs, Redux and Tailwind, An example of an E-commerce website where products are fetched from an API, which can be added to/ removed from the cart. The cart summary is calculated and displayed accordingly. ",
            url:"https://shopping-site-1.netlify.app/",
            img:'shopping.jpeg'
        },
        {title:"Weather App",
            description:"A platform to gather weather information after accessing the current location of the user, or by searching for any city of choice, works Worldwide.",
            url:"https://weather-info-by-rashi.netlify.app/",
            img:'weather.jpeg'
        },
        {title:"Dev detective",
            description:"Created using javaScript, CSS and Fetched from an API, it gathers the GitHub information of any user upon searching.",
            url:"https://dev-detective1.netlify.app/",
            img:'dev.jpeg'
        },
        {title:"Testimonial Component",
            description:"Made using Reactjs and Tailwind, A Testimonial Component of the clients, used across various websites, which also displays Content in random order .",
            url:"https://testimonials-reactjs.netlify.app/",
            img:'testimonial.jpeg'
        },
        {title:"LogIn and SignUp Component",
            description:"Created using Reactjs and Tailwind, A log-in and sign-up component which is used across all the websites.", 
            url:"https://log-in-or-sign-up.netlify.app/signup",
            img:'login.jpeg'
        },
        {title:"Discord Clone",
            description:"Cloned the Home page of Discord using Tailwind",
            url:"https://disscord-clone.netlify.app/#",
            img:'discord.jpeg'
        },
        
        {title:"Modern Chair",
            description:"A page for advertising a chair whose colour can be customised by the user using traditional CSS and Animations. ", 
            url:"https://modern-seat.netlify.app/",
            img:'chair.jpeg',
        },
        {title:"RazorPay Clone",
            description:"Cloned the Home page of RazorPay using Tailwind ", 
            url:"https://razorpay-clone8.netlify.app/",
            img:'razor.jpeg'
        },
        // {title:"Blogs",
        //     description:"Made using ReactJs and Tailwind, A Blogs component which is used across various websites",
        //     url:""},
        
        {title:"Filter Courses",
            description:"Created using Reactjs and Tailwind, this SPA provides list of courses as per the category",
            url:"https://filter-courses-react.netlify.app/",
            img:'courses.jpeg'
        },
    ];
    const arrayLength: number = projects.length;

  return (
    <motion.div 
    initial={{ opacity : 0}}
    whileInView={{ opacity:1}}
    transition={{ duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full xs:max-w-[80vw]
    justify-evenly mx-auto items-center z-0'>
    
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl xs:text-md xs:tracking-[10px]'>
            Projects</h3>
            <h3 className='absolute top-28  uppercase tracking-[3px] text-gray-500 text-sm xs:text-center'>
            Click on the image to redirect to the project
        </h3>

            <div className='relative w-full top-8 flex overflow-x-scroll overflow-y-hidden snap-x 
            snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (
                    <div className=' w-screen flex-shrink-0 snap-center flex flex-col 
                    space-y-4 items-center justify-center p-20 md:p-44 h-screen'>
                        <a href={project.url} target='_blank'>
                        <motion.img 
                        initial={{
                            y:-300,
                            opacity:0
                        }}
                        
                        transition={{ duration:1.2}}
                        whileInView={{ opacity:1 , y:0}}
                        viewport={{once:true}}

                        className='h-80 w-100 mt-[20px] xs:h-44 xs:w-88'
                        src={project.img} alt="R" 
                        />
                        </a>
                       

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl xs:space-y-5'>
                            <h4 className='text-4xl font-semibold text-center xs:text-lg'>
                                <span className='underline decoration-[#f7ab0a]/50'>Project {i+1} of {arrayLength} </span>
                                   : {project.title}
                                </h4>

                                <p 
                                className='text-lg text-center md:text-left max-w-[1000px] xs:text-sm'
                                >
                                    {project.description}
                                </p>
                                </div>
                    </div>
                ))}


                </div>
    
                <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]
                -skew-y-12'></div>
                </motion.div>
      )
    }

