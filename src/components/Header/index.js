import React from 'react';
import {Link, useLocation} from "react-router-dom";
import mainLogo from  '../../images/logo_transparent.png'
import './index.scss';

const Header = () => {

    let location = useLocation();

    const menu_item = [
        {
            name: 'Գլխավոր էջ',
            link: '/',
            className: 'menu-item menu-item--color'
        },{
            name: 'Մեր մասին',
            link: '/about',
            className: 'menu-item menu-item--color'
        },{
            name: 'Կապ',
            link: '/contact',
            className: 'menu-item menu-item-color'
        },{
            name: 'Մուտք',
            link: '/sign-in',
            className: 'menu-item menu-item-color'
        },{
            name: 'Գրանցում',
            link: '/sign-up',
            className: 'menu-item menu-item-color'
        },
    ];

    return ( <div className='h-header'>
            <div className='h-logo'><img src={mainLogo} alt=""/></div>
            <div className='h-items-container'>
            {
                menu_item.map((item, index) => {
                    return <div className={ location.pathname === item.link ? item.className : 'menu-item'} key={index}><Link to={item.link}>{item.name}</Link></div>
                })
            }
            </div>
        </div>
    );
}

export default Header;