import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const Header = () => {
    return <div className='h-header'>
        <div className='h-content'>
            <div className='h-logo'><Link to="/">LOGO</Link></div>
            <div className='h-menu'>
                <div className='hm-item'><Link to="/">Home</Link></div>
                <div className='hm-item'>About</div>
                <div className='hm-item'>Contact</div>
                <div className='hm-item'>Comments</div>
                <div className='hm-item'><Link to="/sign-in">Sign In</Link></div>
                <div className='hm-item'><Link to="/sign-up">Sign Up</Link></div>
            </div>
        </div>
    </div>
}

export default Header;