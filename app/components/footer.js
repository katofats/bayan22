
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        
        <footer className="bg-white text-blue-500 rounded-lg shadow-sm m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Image
                src="/img/aa2.png"
                alt="Picture of the author"
                width={100}
                height={100}
            />
            
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-blue-500 sm:mb-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-blue-500 sm:text-center">© 2023. All Rights Reserved.</span>
    </div>
</footer>

       
    </div>
  )
}

export default Footer