import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const Header = () => {
    const menu_item = [
        {
            name: 'Home',
            link: '/'
        },{
            name: 'About',
            link: '/about'
        },{
            name: 'Contact',
            link: '/contact'
        },{
            name: 'Sign In',
            link: '/sign-in'
        },{
            name: 'Sign Up',
            link: '/sign-up'
        },
    ];

    return ( <div className='menu'>
            <div className='menu-logo'>LOGO</div>
            <div className='menu-items-container'>
            {
                menu_item.map((item, index) => {
                    return <div className='menu-item' key={index}><Link to={item.link}>{item.name}</Link></div>
                })
            }
            </div>
        </div>
    );
}

export default Header;