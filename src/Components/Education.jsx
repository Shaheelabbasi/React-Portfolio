import React from 'react'
import university from '../assets/university.png'
import edu from '../assets/edu.png'
const Education = () => {
  return (
    <div className='bg-skin p-8   '>
 
 <div className='md:flex justify-between'>


 <div className='image'>
    <img src={university} alt="" className='   md:w-[550px] h-[500px]' />
 </div>

 <div className='details md:w-[550px]' >
  <div className='p-4'>

 <h1 className='text-introcolor text-2xl mb-2'>Pmas Arid Agriculture University Rawalpindi</h1>
 <h1 className='text-introcolor text-2xl mb-2'>Bachelor of Science in Software Engineering</h1>
 <h1 className='text-introcolor text-2xl mb-2'>2021-2025</h1>
 </div>
  
  <div className='degree-info p-4'>
<p className='text-xl leading-8'>As a committed software engineering student, I have a solid grasp of core subjects like Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP). I am proficient in languages such as C++, Java, JavaScript, and SQL (MySQL), which I have applied to various projects. My work reflects a strong understanding of both theoretical concepts and practical applications.</p>
  </div>



  </div>


  </div>




<div className='md:flex justify-between mt-4'>


  <div className=' '>

<img src={edu} alt="" className='md:w-[550px] h-[500px]  ' />
  </div>

  <div className='details-intermediate md:w-[550px]  '>
    <div className='p-4'>

  <h1 className='text-introcolor text-2xl mb-2'>IQRA Intermediate College Chirala Bagh AJK</h1>
 <h1 className='text-introcolor text-2xl mb-2'>Pre Engineering</h1>
 <h1 className='text-introcolor text-2xl mb-2'>2017-2019</h1>
    </div>

 <div className=' '>
    <p className='text-xl leading-8 p-4 '>
    As a dedicated pre-engineering student, I have developed a strong foundation in mathematics, physics, and chemistry, which fuels my passion for problem-solving and innovation. Alongside my academic pursuits, I actively participated in co-curricular activities, including playing cricket for the college team, which  enhanced my teamwork and leadership skills
    </p>
  </div>

  </div>

  
  </div>

   

    </div>


  )
}

export default Education
