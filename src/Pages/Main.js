import React from 'react'
import Header from '../Components/Header';
import LoginPanel from '../Components/LoginPanel'
import Title from '../Components/Title';
import { useState } from 'react';
import Events from '../Components/Events';
import Footer from '../Components/Footer';

export const Main = () => {
    const toggleLogin = () => {
        setLoginState(() => {
            if (!sessionStorage.getItem('auth-token')) {
                // User has not logged in
                return false;
            } else {
                // Verify user identity
                const authToken = '12345abcdef';
                if (sessionStorage.getItem('auth-token') === authToken) {
                    return true;
                } else {
                    return false;
                }
            }
        })
    }
    const [loginState, setLoginState] = useState(() => {
        if (!sessionStorage.getItem('auth-token')) {
            // User has not logged in
            return false;
        } else {
            // Verify user identity
            const authToken = '12345abcdef';
            if (sessionStorage.getItem('auth-token') === authToken) {
                return true;
            } else {
                return false;
            }
        }
    }
    )
    
    return (
        <div className='bg-black min-h-screen pt-10 pb-20 lg:px-16 px-6 w-screen overflow-hidden'>
            <Header />
            <Title />
            <LoginPanel loginState={loginState} toggleLogin={toggleLogin} />
            <Events loginState={loginState} />
            <Footer />
        </div>
    )
}

export default Main;