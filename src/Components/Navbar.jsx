import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }


    return (

        <nav className='bg-skin' >

            <div className='flex items-center justify-between h-40 '>

                <div className='sm:ml-10 md:ml-10'>
                    <img src={logo} alt="" />
                </div>

                <ul className='hidden md:flex space-x-8 text-2xl mr-5'>
                    <Link to="/">   <li className='cursor-pointer'>Home</li>  </Link>
                    <Link to="/education">   <li className='cursor-pointer'>Education</li> </Link>
                    <Link to="/projects">      <li className='cursor-pointer'>Projects</li>  </Link>
                    <Link to="/contact">       <li className='cursor-pointer'>Contact</li> </Link>
                </ul>

                <button className='md:hidden' onClick={toggleMenu}>
                    {
                        !isMenuOpen ? <FontAwesomeIcon icon={faBars} className='text-barcolor mr-10 text-2xl'></FontAwesomeIcon>
                            : <FontAwesomeIcon icon={faXmark} className='text-barcolor mr-10 text-2xl'></FontAwesomeIcon>
                    }
                </button>






            </div>
            {
                isMenuOpen ? (
                    <ul className='md:hidden flex flex-col space-y-4 text-xl ml-5 mt-6'>
                        <Link to="/">   <li className='cursor-pointer'>Home</li>  </Link>
                        <Link to="/education">   <li className='cursor-pointer'>Education</li> </Link>
                        <Link to="/projects">      <li className='cursor-pointer'>Projects</li>  </Link>
                        <Link to="/contact">       <li className='cursor-pointer'>Contact</li> </Link>
                    </ul>
                ) : null
            }

        </nav>
    )
}

export default Navbar
