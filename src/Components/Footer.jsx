import React from 'react'
import { FiCodesandbox } from 'react-icons/fi';

export const Footer = () => {
  return (
      <div>
          <hr className='mt-20 mb-10'/>
          <header className='lg:flex md:flex gap-5 h-auto grid mb-2'>
              <FiCodesandbox className='font-extrabold text-black text-3xl my-auto p-1 bg-white rounded-full' />
              <h1 className='font-bold text-white text-xl font-poppins my-auto'>HTN Events</h1>
              <h1 className='font-bold text-white lg:text-md text-xs font-poppins my-auto lg:px-3 px-5 py-1 rounded-full ring-1 ring-white text-center w-fit'>By Emma Huang: For Hack the North</h1>
          </header>
      </div>
  )
}

export default Footer;