import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { logOutAction } from '../../actions/profile.actions';
import { userProfile } from '../../selectors/profile.selectors';
import Text from '../../Shared/Text';
import mainLogo from '../../assets/images/logo_transparent.png';
import history from '../../histoty';
import './index.scss';

const Header = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const profile = useSelector(userProfile);
  const { isAuth, type } = profile;

  useEffect(() => {
    if (!isAuth && location.pathname !== '/sign-up') {
      history.push('/sign-in');
    }
  }, [isAuth, location.pathname]);

  useEffect(() => {
    if (type === 'admin') {
      history.push('/admin');
    } else {
      history.push('/');
    }
  }, [type, isAuth]);

  const menu_item = [
    {
      name: 'Դաս',
      link: '/lesson',
      className: 'menu-item menu-item-color'
    }, {
      name: 'Մեկնաբանություն',
      link: '/comments',
      className: 'menu-item menu-item-color'
    },
  ];
  const handleAvatarClick = () => {
    if (!isAuth) {
      history.push('/sign-in');
    } else {
      confirm();
    }
  };
  const confirm = () => {
    Modal.confirm({
      title: 'ԴՈՒՐՍ ԳԱԼ',
      icon: <ExclamationCircleOutlined />,
      content: 'Համոզվա՞ծ եք, որ ուզում եք դուրս գալ',
      okText: 'Դուրս Գալ',
      cancelText: 'ՈՉ',
      onOk: () => {
        localStorage.clear();
        history.push('/sign-in');
        dispatch(logOutAction.request());
      },
      closable: true,
      centered: true
    });
  };

  return (
    <div className='h-header'>
      <div className='h-logo'><Link to='/'><img src={mainLogo} alt='' /></Link></div>
      <div className='h-items-wrapper'>
        <div className='h-items-container'>
          <Link to='/'>
            <Text level={2}>
              <HomeOutlined
                className={location.pathname === '/' ? 'menu-item menu-item-color' : 'menu-item'}
              />
            </Text>
          </Link>
          {
            menu_item.map((item, index) => <div className={location.pathname === item.link ? item.className : 'menu-item'} key={index}><Link to={item.link}><Text level={2}>{item.name}</Text></Link></div>)
          }
          <div className='auth-icon'>
            <Text level={2} onClick={() => handleAvatarClick()}>
              <UserOutlined
                className={location.pathname === '/sign-in' || location.pathname === '/sign-up' ? 'menu-item menu-item-color' : 'menu-item'}
              />
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
