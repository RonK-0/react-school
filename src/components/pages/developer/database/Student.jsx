import React from 'react'
import Navigation from '../../../partials/Navigation'
import Header from '../../../partials/Header'
import { CiSearch } from 'react-icons/ci'

const Student = () => {
  return (
    <section className='flex'>
      <Navigation/>
      <main className='w-[calc(100%-250px)]'>
        <Header/>
        <div className="main-wrapper px-4 py-3">
          <div className="flex justify-between items-center">
            <h1>Database</h1>
            <form action="" className='relative'>
              <input type="text" name="" id="" placeholder='Search student' className='p-1 px-3 pl-10 bg-stone-300 border border-stone-800 rounded-md placeholder:text-stone-400 text-stone-800' />
              <CiSearch className='absolute ty-a left-2 z-20 text-red-700 text-2xl'/>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Student