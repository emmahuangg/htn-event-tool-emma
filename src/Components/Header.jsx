import React from 'react'
import { FiCodesandbox } from 'react-icons/fi';

export const Header = () => {

  return (
    <div>
    <header className='lg:flex md:flex gap-5 h-auto lg:mb-8 grid mb-2'>
      <FiCodesandbox className='font-extrabold text-black text-4xl my-auto p-1 bg-white rounded-full' />
      <h1 className='font-bold text-white text-2xl font-poppins my-auto'>HTN Events</h1>
        <h1 className='font-bold text-white lg:text-md text-xs font-poppins lg:ml-auto md:ml-auto my-auto lg:px-3 px-5 py-1 rounded-full ring-1 ring-white text-center w-fit'>By Emma Huang: For Hack the North</h1>
      </header>
    </div>
    )
}

export default Header;