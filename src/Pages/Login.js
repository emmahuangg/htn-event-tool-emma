import React from 'react'
import Header from '../Components/Header';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import login from '../Resources/login.jpeg'
import { FiCodesandbox } from 'react-icons/fi';
import Footer from '../Components/Footer';

export const Login = () => {
  const [alert, setAlert] = useState(""); // For alerting the user when incorrect credentials are entered 
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  
  // Sample hard-coded credentials; actual credentials should be dealt with in the backend app connected to the authentication database table. 
  const credentials = {
    email: 'hackTheNorthUser@gmail.com',
    password: 'abcabcabc',
    token: '12345abcdef'
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => { 
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleLoginSubmit = (event) => { 
    event.preventDefault();
    // Verify that the user information matches (hard-coded) valid credentials
    if (formData.email === credentials.email && formData.password === credentials.password) {
      setAlert("")
      sessionStorage.setItem('auth-token', credentials.token);
      routeChange("/")
    } else {
      setAlert("Your username or password is incorrect.")
    }
  }
  
  return (
    <div className='bg-black min-h-screen pt-10 pb-20 lg:px-16 px-6 w-full'>
      <Header />
      <div className='grid lg:grid-cols-2 bg-white rounded-xl  h-full w-full gap-4 mt-4 overflow-hidden'>
        <div className='lg:col-span-1 relative'>
          <img src={login} className='lg:w-auto lg:h-full w-full h-auto object-cover relative' alt="Event" />
          <button onClick={() => routeChange('/')} className='absolute top-5 left-5 text-black bg-white rounded-full px-3 py-2 font-extrabold shadow-lg shadow-grey text-xl hover:bg-pink transition-all duration-200'>Back</button>
        </div>
        <div className='lg:col-span-1 bg-white w-full'>
          {/* Sample login form */}
          <form autoComplete="off" onSubmit={handleLoginSubmit} className='lg:p-10 m-6 w-full'>
            <FiCodesandbox className='text-5xl text-black mb-3 font-extrabold'/>
            <h1 className='text-4xl text-black font-extrabold mb-3'>Login</h1>
            <p className='lg:text-lg text-sm text-grey font-light mb-3'>Login to view and join private events.</p>
            <p className='text-lg text-black font-bold my-1'>Email</p>
            <input className=' bg-white ring-2 ring-pink drop-shadow-lg outline-none rounded-xl my-1 px-3 py-1 lg:text-lg text-black lg:w-80 w-60 text-sm' type="email" name="email" placeholder="hackTheNorthUser@gmail.com" value={formData.email} onChange={handleChange} />
            <p className='text-lg text-black font-bold my-1'>Password</p>
            <input className='bg-white ring-2 ring-pink drop-shadow-lg outline-none rounded-xl my-1 px-3 py-1 lg:text-lg text-black lg:w-80 w-60 text-sm' type="password" name="password" placeholder="abcabcabc" value={formData.password} onChange={handleChange} />
            <button className='bg-gradient-to-r from-pink to-purple rounded-xl py-2 px-auto text-white block text-xl mt-6 lg:w-80 w-60 font-extrabold mb-2 shadow-lg hover:shadow-purple shadow-pink transition-all duration-200'>Login</button>
            <h1 className=' h-8 mt-6 lg:text-lg text-sm text-grey font-light'>{alert}</h1>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;