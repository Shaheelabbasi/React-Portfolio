import React from 'react'
import contact from '../assets/contact.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='  text-center bg-skin md:flex justify-between'>

        <div>
            <img src={contact} alt="" className='md:w-[550px] h-[500px]' />
        </div>

<div className='md:w-[550px]   flex flex-col space-y-10'>


       <h1 className='text-2xl font-bold text-introcolor md:mt-10 text-5xl'>Contact Me</h1>

       <div className='info p-4'>
      <p className='text-xl md:text-2xl'>Get in touch! Whether you have a project in mind, want to collaborate, I'm available on almost every social media platform</p>
       </div>

       <div className='social-links flex justify-center space-x-4 mt-4 md:space-x-6' >
       <a href="https://www.facebook.com/profile.php?id=100010334866642">  <FontAwesomeIcon icon={faFacebook} className='text-4xl text-blue-600 md:text-5xl cursor-pointer'></FontAwesomeIcon> </a>
        <a href="https://www.linkedin.com/in/shaheel-abbasi-8338902b8"> <FontAwesomeIcon icon={faLinkedin} className='text-4xl text-blue-600  md:text-5xl cursor-pointer'></FontAwesomeIcon> </a>
       <a href="https://github.com/Shaheelabbasi">  <FontAwesomeIcon icon={faGithub} className='text-4xl text-black md:text-5xl cursor-pointer'></FontAwesomeIcon> </a>
       <a href="https://www.instagram.com/ishaheelabbasi/">  <FontAwesomeIcon icon={faInstagram} className='text-4xl text-red-600 md:text-5xl cursor-pointer'></FontAwesomeIcon> </a>
       </div>

       <div className='mt-4'>
        <a href="https://drive.google.com/file/d/1BjFA3xyDuOsJadcOtZPiy6zzrL3YnIIx/view?usp=drive_link">
       <button className='w-36 h-12   bg-skin border-2 border-white text-introcolor font-bold rounded-2xl md:w-56 text-2xl'>See My resume</button> 
       </a>
       </div>
       </div>
      
    </div>

  )
}

export default Contact
