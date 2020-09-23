import React from 'react';
import { useSelector } from 'react-redux';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { NavBar } from './components/ui/NavBar';

export const MainScreen = () => {

    const {loginVisible, RegisterVisible} = useSelector(state => state.auth)

    return  <>
                <div className="body-container">
                    <img src="background.png" alt=""/>
                </div>

                <div className="header-container">
                    <NavBar />
                    {(loginVisible) && <LoginForm/>}
                    {(RegisterVisible) && <RegisterForm/>}
                </div>
                
                <div className="container">
                    <h1 className="pt-5">Calendar App</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nobis quibusdam, quam nulla animi hic! Mollitia, aut quam? Tempora numquam odio optio accusamus sapiente aperiam cupiditate incidunt vitae deleniti velit.</p>
                </div>
            </>
}