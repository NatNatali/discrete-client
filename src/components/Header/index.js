import React from 'react';
import mainLogo from  '../../images/logo_transparent.png'
import './index.scss';
import {HomeOutlined, UserOutlined} from '@ant-design/icons';
import Text from "../../Shared/Text";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Header = () => {
    let history = useHistory();
    let location = useLocation();

    const isAuth = localStorage.getItem('token')?.length

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
    const handleAvatarClick = () => {
        if (!isAuth) {
            history.push('/sign-in')
        } else {
            confirm();
        }
    }
    const confirm = () => {
        Modal.confirm({
            title: 'ԴՈՒՐՍ ԳԱԼ',
            icon: <ExclamationCircleOutlined />,
            content: 'Համոզվա՞ծ եք, որ ուզում եք դուրս գալ',
            okText: 'Դուրս Գալ',
            cancelText: 'ՈՉ',
            onOk: () => {
                localStorage.clear();
                history.push('/sign-in')
            },
            closable: true,
            centered: true
        });
    }

    return ( <div className='h-header'>
            <div className='h-logo'><Link to='/'><img src={mainLogo} alt=""/></Link></div>
            <div className='h-items-container'>
                <Link to='/'>
                    <Text level={2}>
                        <HomeOutlined
                            className={ location.pathname === '/' ? 'menu-item menu-item-color' : 'menu-item'}
                        />
                    </Text>
                </Link>
                {
                    menu_item.map((item, index) => {
                        return <div className={ location.pathname === item.link ? item.className : 'menu-item'} key={index}><Link to={item.link}><Text level={2}>{item.name}</Text></Link></div>
                    })
                }
                <div className='auth-icon'>
                    <Text level={2} onClick={() => handleAvatarClick()}>
                        <UserOutlined
                            className={ location.pathname === '/sign-in' || location.pathname === '/sign-up' ? 'menu-item menu-item-color' : 'menu-item'}
                        />
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default Header;