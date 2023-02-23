import React from 'react'
import { FiCodesandbox } from 'react-icons/fi';

export const Header = () => {

  return (
    <div>
    <header className='flex gap-5 h-auto mb-8'>
      <FiCodesandbox className='font-extrabold text-black text-4xl my-auto p-1 bg-white rounded-full' />
      <h1 className='font-bold text-white text-2xl font-poppins my-auto'>HTN Events</h1>
      <h1 className='font-bold text-white text-md font-poppins ml-auto my-auto px-3 py-1 rounded-full outline outline-3'>By Emma Huang: For Hack the North</h1>
      </header>
    </div>
    )
}

export default Header;