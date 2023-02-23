import React from 'react'
import { useNavigate } from "react-router-dom";

export const LoginPanel = (props) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const handleLogout = () => { 
        sessionStorage.clear();
        props.toggleLogin();
    }
    return (
        <div className='mb-8'>
            {props.loginState && <div><hr className='text-white mb-8'/>
                <span className='lg:flex md:flex gap-5 grid'>
                <h1 className='text-yellow font-extrabold lg:text-6xl text-3xl my-auto italic'>Welcome, hacker!</h1>
                <button onClick={() => handleLogout()} className='text-black bg-yellow rounded-full px-4 lg:py-2 py-1 font-extrabold shadow-lg shadow-pureBlack lg:text-3xl text-xl hover:bg-white transition-all duration-200 lg:ml-auto md:ml-auto w-fit'>LOGOUT</button>
            </span>
            <hr className='text-white mt-8' /></div>
            }
            {!props.loginState && <div><hr className='text-white mb-8' />
                <span className='lg:flex md:flex lg:gap-5 grid gap-3'>
                    <h1 className='text-yellow font-extrabold lg:text-6xl text-3xl my-auto italic'>LOGIN NOW</h1>
                    <h1 className='text-white font-bold lg:text-3xl text-xl my-auto'>and get access to private HTN events.</h1>
                    <button onClick={() => routeChange('/login')} className='text-black bg-yellow rounded-full px-4 lg:py-2 py-1 font-extrabold shadow-lg shadow-pureBlack lg:text-3xl text-xl hover:bg-white transition-all duration-200 lg:ml-auto md:ml-auto   w-fit'>LOGIN</button>
                </span>
                <hr className='text-white mt-8' />
            </div>
            }
        </div>
    )
}

export default LoginPanel;