import React from 'react'
import Image from 'next/image'
import one from '/public/img/one.webp'
import two from '/public/img/two.webp'
import b12 from '/public/img/b12.jpg'
import Accordion from './accd/accordion'
import Table from './table'

const Main = () => {
  return (
    <main className='space-y-12 pb-12'>
      {/* Hero Section */}
      <section className='relative h-[60vh] min-h-[400px] w-full'>
        <div className='absolute inset-0'>
          <Image
            src={b12}
            alt="Hero background"
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>
        <div className='relative h-full flex items-center justify-center px-4'>
          <p className='max-w-3xl text-center text-white'>
            <span className='block text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>AL-Bayern-Ujaama Sacco</span>
            <span className='text-lg md:text-xl lg:text-2xl font-light'>
              This draft provides a basic framework and can be expanded or modified depending on
              your SACCO's needs and jurisdictional requirements.
            </span>
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className='container mx-auto px-4'>
        <div className='text-center space-y-4'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
            Al-Bayern-Ujaama Sacco Online Based
          </h2>
          <div>
            <p className='text-xl text-blue-600'>Since 2024</p>
            <h3 className='text-xl text-blue-500 mt-2'>SACCO</h3>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className='w-full bg-gradient-to-r from-indigo-500 to-blue-600 py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-12 gap-8'>
            <div className='md:col-span-4'>
              <h1 className='text-2xl md:text-3xl text-white font-semibold border-b-4 border-amber-50 pb-4 mb-6'>
                Governance
              </h1>
            </div>
            <div className='md:col-span-8'>
              <Accordion />
            </div>
          </div>
        </div>
      </section>

      {/* Signatories Section */}
      <section className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-3xl md:text-4xl border-b-2 pb-2 font-[var(--font-playfair)] tracking-wide'>
              Signatories:
            </h1>
            <h2 className='font-[var(--font-libre)] text-lg md:text-xl text-gray-800 leading-relaxed'>
              IN WITNESS WHEREOF, the undersigned members have agreed to the terms of this
              Agreement and have affixed their signatures as of the date first above written.
            </h2>
          </div>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <Table />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main