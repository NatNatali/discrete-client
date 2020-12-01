import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const MobileHeader = () => {

    const [open, setOpen] = useState(false);

    const mobile_menu_item = [
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



    return ( <div className='mobile'>
            <div className='mobile-menu'>
                <div className='menu-logo'>LOGO</div>
                <div className='menu-button' onClick={() => setOpen(!open)}>Menu</div>
            </div>
            <div className='menu-container'>
                <div className={open ? 'menu-field' : 'menu-field-none'}>
                    {
                        mobile_menu_item.map((item, index) => {
                            return <div key={index} className='menu-items' onClick={() => setOpen(!open)}><Link to={item.link}>{item.name}</Link></div>
                        })
                    }
                </div>
            </div>
        </div>
    );

}

export default MobileHeader;