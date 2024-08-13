import React from 'react'

import projectsData from '../Data/projects'
const Projects = () => {
  return (
    <div className='  bg-skin p-5 md:p-4'>
      
      <div className='flex flex-col space-y-5 items-center md:flex-row flex-wrap justify-center space-x-10'>

      
      {
        projectsData.map((data)=>(
          <div className='   flex flex-col items-center p-4 rounded-2xl cursor-pointer md:w-96'>
          <h1 className='text-3xl text-introcolor font-bold'>{data.title}</h1>
 
          <div className='technologies    p-4'>
        <p className='text-2xl'>{data.description}</p>
          </div>

         <div className='flex space-x-2 mt-2'>
          {
            data.logos.map((img)=>(
              <img src={img} alt="" className=' w-16 h-16 md:w-20 h-20 '  />
            ))
          }
         
         </div>
 
       </div>
 
        ))
      }
    
    </div>

      
    </div>
  )
}

export default Projects
