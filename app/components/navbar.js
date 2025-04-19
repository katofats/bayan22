"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import alm from '/public/img/alrm.png'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='sticky top-0 z-50 bg-white shadow-sm'>
      <nav className='container mx-auto'>
        <div className='flex items-center justify-between px-4 py-3'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image src={alm} alt='myLogo' height={50} className='w-auto'/>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a href="#" className='text-gray-700 hover:text-blue-600 transition'>Home</a>
            <a href="#" className='text-gray-700 hover:text-blue-600 transition'>About</a>
            <a href="#" className='text-gray-700 hover:text-blue-600 transition'>Services</a>
            <div className='flex items-center text-blue-600'>
              <FiPhone className='mr-2' size={16} />
              <span className='font-medium'>+491781015092</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 hover:text-blue-600 focus:outline-none'
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden px-4 pt-2 pb-4 space-y-3'>
            <a href="#" className='block text-gray-700 hover:text-blue-600 transition py-2'>Home</a>
            <a href="#" className='block text-gray-700 hover:text-blue-600 transition py-2'>About</a>
            <a href="#" className='block text-gray-700 hover:text-blue-600 transition py-2'>Services</a>
            <div className='flex items-center text-blue-600 py-2'>
              <FiPhone className='mr-2' size={16} />
              <span className='font-medium'>+491781015092</span>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar