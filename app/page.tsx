import Image from 'next/image'
import Head from "next/head"
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen
     snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
      z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      {/* <Head> */}
        <title>Rashi&apos;s Portfolio</title>
      {/* </Head> */}
      
      <Header/>

      <section id="hero" className='snap-start'>
        <Hero/>
      </section>


      <section id="about" className="snap-center">
        <About/>
      </section>

      {/* Experience */}

      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="https://i.postimg.cc/gk4sNdVm/1501-CE3-A-4-C16-46-A0-81-A3-F37-A74-C1-E328-1-201-a.jpg"
              alt="Profile Picture" 
              width={40}
              height={40}
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}
