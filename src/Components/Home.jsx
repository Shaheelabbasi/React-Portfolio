import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import profile from '../assets/profile.png'
import services from '../Data/servicedata.js'
import { Link } from 'react-router-dom';
const Home = () => {
  return (

  




<div className='greeting w-full   bg-skin'>


<div className='md:flex justify-between w-full'>


<div className='flex flex-col space-y-4 '>


 <div className='text-center p-4  w-full flex flex-col space-y-3 md:w-[680px] h-[300px] ml-3'>

  <h1 className='text-3xl text-introcolor font-bold mb-2 md:text-5xl'>I'm Shaheel Abbasi</h1>
  <h1 className='text-3xl text-introcolor font-bold mb-2 md:text-5xl' >Web developer</h1>
  <p className='text-xl md:text-2xl'>Experienced MERN Stack developer with a passion for crafting high-performance, scalable web applications. Proficient in building full-stack solutions</p>
 </div>
 <div className='icon-container w-full h-20  m-auto flex items-center justify-center space-x-6 '>
  <a href="https://www.facebook.com/profile.php?id=100010334866642"><FontAwesomeIcon icon={faFacebook} className='text-4xl text-blue-600  cursor-pointer md:text-6xl'></FontAwesomeIcon>  </a>
 
 <a href="https://www.linkedin.com/in/shaheel-abbasi-8338902b8"><FontAwesomeIcon icon={faLinkedin} className='text-4xl text-blue-600 md:text-6xl  cursor-pointer'></FontAwesomeIcon> </a>

<a href="https://github.com/Shaheelabbasi"><FontAwesomeIcon icon={faGithub} className='text-4xl text-black md:text-6xl  cursor-pointer'> </FontAwesomeIcon> </a>
 <a href="https://www.instagram.com/ishaheelabbasi/"><FontAwesomeIcon icon={faInstagram}className='text-4xl text-red-600 md:text-6xl  cursor-pointer' ></FontAwesomeIcon>  </a>
</div>

</div>


<div className=''>
  <img src={profile} alt="" />
</div>




</div>

<div className='text-center m-5  '>
  <h1 className='text-4xl font-bold'>what I do</h1>

  <div className='flex flex-col items-center space-y-5 p-4 md:flex-row space-x-6'>
    {
      services.map((service) => (
        <div className='card-container flex flex-col items-center  bg-white w-full rounded-3xl md:w-[450px] h-[430px] p-4'>
          <div>
            <img src={service.logo} alt="" className='w-36 h-36' />
          </div>
          <h1 className='text-introcolor text-4xl mb-2 md:font-bold'>{service.name}</h1>
          <div className='text-2xl text-center'>
            {service.text}
          </div>
        </div>
      ))
    }
  </div>
</div>










</div>













 
















    




  )
}

export default Home
