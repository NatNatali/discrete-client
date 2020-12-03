import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const Header = () => {
    const menu_item = [
        {
            name: 'Գլխավոր էջ',
            link: '/'
        },{
            name: 'Մեր մասին',
            link: '/about'
        },{
            name: 'Կապ',
            link: '/contact'
        },{
            name: 'Մուտք',
            link: '/sign-in'
        },{
            name: 'Գրանցում',
            link: '/sign-up'
        },
    ];

    return ( <div className='h-header'>
            <div className='h-logo'>LOGO</div>
            <div className='h-items-container'>
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