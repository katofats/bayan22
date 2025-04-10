import React from 'react'
import Image from 'next/image'
import alm from '/public/img/alrm.png'

const Navbar = () => {
  return (
    <div className='bg-white'>
      <nav className='container mx-auto text-white flex p-4 justify-between'>
        <Image src={alm}alt='myLogo' height={50}/>
      </nav>
    </div>
    
  )
}

export default Navbar