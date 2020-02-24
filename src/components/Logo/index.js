import React from 'react';
import logo from '../../assets/images/MMwhitelogo3.png';
import '../Logo/Logo.css';


export default function Logo() {
    return (
        <div className="logo-container">
            <img className="logo" src={logo} alt="Logo" />
        </div>
    );
}
