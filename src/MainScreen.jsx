import React from 'react';
import { useSelector } from 'react-redux';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { NavBar } from './components/ui/NavBar';

export const MainScreen = () => {

    const {loginVisible, RegisterVisible} = useSelector(state => state.auth)

    return  <>
            <NavBar />
            {(loginVisible) && <LoginForm/>}
            {(RegisterVisible) && <RegisterForm/>}
                <div className="container mt-5">
                    <h1>Calendar App</h1>
                </div>
            </>
}