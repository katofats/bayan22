import React from 'react'
import Image from 'next/image'
import one from '/public/img/one.webp'
import two from '/public/img/two.webp'
import b12 from '/public/img/b12.jpg'
import Accordion from './accd/accordion'
import Table from './table'


const Main = () => {
  return (
    <div>
       <div className='container mx-auto px-4 h-92' >
          <div className="bg-[url(/img/b12.jpg)] bg-cover bg-center w-full h-full flex items-center justify-center">
          <p className='p-2 text-2xl text-blue-500 h-66 w-2xl bg-opacity-70 text-center font-serif'>
              This draft provides a basic framework and can be expanded or modified depending on
              your SACCO&#39;s needs and jurisdictional requirements.
          </p>
          </div>
       </div>

       <section className='container mx-auto p-4'>
          <div className="m-4">
            <h2 className='text-center text-xl font-semibold'>
              Al-Bayern-Ujaama Sacco Online Based
              Since 2024
            </h2>
            <div>
              <h3 className='text-center text-xl text-blue-500'> SACCO</h3>
            </div>
          </div>
        </section>

      <section className='w-full h-auto bg-gradient-to-r
        from-indigo-500 to-blue-600 '
      >
        <div className='container mx-auto sm:p-4 '>
          <div className=' m-4 flex flex-col sm:flex-row '>

            <div className='flex-2/5'>
            <h1 className='sm:text-3xl p-4 text-amber-50 border-b-4 mb-5 text-2xl sm:m-5'>Governance</h1>
            <div className=''></div>
            </div>

            <div className='flex-3/4 '>
            <Accordion/>
            </div>
            
          </div>
          
        </div>
      </section>

      <section className='container mx-auto p-5 m-4 sm:m-5 '>
        <div>
          <h1 className='font-bold text-3xl p-2 border-b-2'>Signatories:</h1>
          <h2 className='font-semibold text-xl p-2'>
            IN WITNESS WHEREOF, the undersigned members have agreed to the terms of this<br/>
            Agreement and have affixed their signatures as of th e date first above written.
          </h2>
        </div>
        <div className='p-4 '>
          <Table/>
        </div>
      </section>
    </div>
    
  )
}

export default Main