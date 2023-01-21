import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import devFabe from '../public/fabio-wave.png';
import webDev from '../public/webDev.png';
import ITS from '../public/ITS.png';
import ITC from '../public/ITC.png';
import web1 from "../public/web1.png";

import {useState} from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>FabianNavarroPortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>DevelopedByFabian</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer text-2xl dark:text-white"/>
              </li>

            </ul>
          </nav>
          <div className="text-center p-10 py-10"> 
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl'>Fabian Navarro</h2>
            <h3 className='Text-2xl py-2 md:text-3xl lg:text-4xl dark:text-white'>Developer and IT Professional</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
            Hey there, my name is Fabian Navarro. I graduated with a degree in Computer Science and have a lot of experience in the IT field. I enjoy working on web development projects, IT services, and consulting. If you need help in any of these areas, I'd be happy to lend a hand. 
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16  text-gray-600 dark:text-white'>
            <a href="https://www.linkedin.com/in/fabiannavarrotech/">
            <AiFillLinkedin />
            </a>
            <a href="https://github.com/fabianenavarro">
            <AiFillGithub />
            </a>
            <a href="https://twitter.com/Fabian_Navarr0">
            <AiFillTwitterCircle />
            </a>
            
          </div>
          <div className= "relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={devFabe}/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
            I provide a wide range of IT services, including web development, technical support, and consulting. Whether you're facing a specific IT challenge or simply need guidance, I'm here to help.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image className="mx-auto"src={webDev} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Web Development
              </h3>
              <p className="py-2">
              I can assist in creating a professional and marketable website for your small business or personal portfolio.
              </p>
              <h4 className="py-4 text-teal-600">Perfect for</h4>
              <p className="text-gray-800 py-1">Business websites</p>
              <p className="text-gray-800 py-1">Portfolios</p>
              <p className="text-gray-800 py-1">Marketing</p>
              <p className="text-gray-800 py-1">Job Search</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image className="mx-auto"src={ITS} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                IT Support
              </h3>
              <p className="py-2">
              If you're having difficulties with your home or office technology, my IT services are an excellent solution for you.
              </p>
              <h4 className="py-4 text-teal-600">IT solutions for:</h4>
              <p className="text-gray-800 py-1">Computer systems</p>
              <p className="text-gray-800 py-1">Operating systems</p>
              <p className="text-gray-800 py-1">Software</p>
              <p className="text-gray-800 py-1">And more</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image className="mx-auto"src={ITC} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                IT Consulting
              </h3>
              <p className="py-2">
              My consulting services provide cost-effective technology solutions for your at-home or small business needs.
              </p>
              <h4 className="py-4 text-teal-600">Featuring</h4>
              <p className="text-gray-800 py-1">End-user communication</p>
              <p className="text-gray-800 py-1">Home security solutions</p>
              <p className="text-gray-800 py-1">Office systems</p>
              <p className="text-gray-800 py-1">Cloud solutions</p>
            </div>
          </div>
        </section> 
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Contact Information</h3>
            <p className='text-xl py-5 leading-8 text-gray-800 dark:text-white'>
            If you need my help please email me at fabianenavarro@yahoo.com or contact me at 361-455-2705. 
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}


