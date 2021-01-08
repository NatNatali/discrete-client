import React from 'react';
import {Link, useLocation} from "react-router-dom";
import mainLogo from  '../../images/logo_transparent 1.png'
import './index.scss';
import {HomeOutlined, UserOutlined} from '@ant-design/icons';
import Text from "../../Shared/Text";

const Header = () => {

    let location = useLocation();

    const menu_item = [
        {
            name: 'Դաս',
            link: '/lesson',
            className: 'menu-item menu-item-color'
        },{
            name: 'Մեկնաբանություն',
            link: '/comments',
            className: 'menu-item menu-item-color'
        },
    ];

    return ( <div className='h-header'>
            <div className='h-logo'><Link to='/'><img src={mainLogo} alt=""/></Link></div>
            <div className='h-items-container'>
                <Link to='/'><Text level={2}><HomeOutlined className={ location.pathname === '/' ? 'menu-item menu-item-color' : 'menu-item'}/></Text></Link>
                {
                    menu_item.map((item, index) => {
                        return <div className={ location.pathname === item.link ? item.className : 'menu-item'} key={index}><Link to={item.link}><Text level={2}>{item.name}</Text></Link></div>
                    })
                }
                <Link to='/sign-in'><Text level={2}><UserOutlined className={ location.pathname === '/sign-in' || location.pathname === '/sign-up' ? 'menu-item menu-item-color' : 'menu-item'}/></Text></Link>
            </div>
        </div>
    );
}

export default Header;