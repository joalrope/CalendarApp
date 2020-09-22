import React from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { NavBar } from './components/ui/NavBar';

export const MainScreen = () => {

    return  <>
            <NavBar />
            <div className="container auth-container">
                <div className="row">
                    <div className="col-md-6">
                        <LoginForm/>
                    </div>

                    <div className="col-md-6">
                        <RegisterForm/>
                    </div>
                </div>
            </div>
            </>
}