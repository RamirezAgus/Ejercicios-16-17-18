import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/form/LoginForm';

const LoginPage = ({ login }) => {

    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm login={login}/>
            <Link to="/register">Registrarse</Link>
        </div>
    );
}

export default LoginPage;
