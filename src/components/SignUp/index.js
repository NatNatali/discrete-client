import { useRef, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Spin } from 'antd';
import Button from '../../Shared/Button';
import Container from '../Container';
import Input from '../../Shared/Input';
import Text from '../../Shared/Text';
import Breadcrumb from '../../Shared/Breadcrumb';
import { getProfileAction, signUpAction } from '../../actions/profile.actions';
import './index.scss';


const SignUp = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const inSignUp = location.pathname === '/sign-up';

  const { register, handleSubmit, watch, errors, reset } = useForm();

  useEffect(() => {
    reset();
  }, [location.pathname, reset]);

  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = data => {

    if (inSignUp) {
      dispatch(signUpAction.request(data));
    } else {
      dispatch(getProfileAction.request(data));
    }
  };

  const pattern = new RegExp('^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).*$');
  const emPattern = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');

  const validatePassword = value => {
    if (value.length) {
      return pattern.test(value);
    }
  };

  const validateEmail = value => {
    if (value.length) {
      return emPattern.test(value);
    }
  };

  const form_item = inSignUp ? [
    {
      label: 'Անուն',
      placeholder: 'Անուն',
      name: 'first_name',
      type: 'text',
      register: register({
        required: 'Մուտքագրեք ձեր անունը'
      })
    }, {
      label: 'Ազգանուն',
      placeholder: 'Ազգանուն',
      name: 'last_name',
      type: 'text',
      register: register({
        required: 'Մուտքագրեք ձեր ազգանունը'
      })
    }, {
      label: 'Էլ-հասցե',
      placeholder: 'Էլ-հասցե',
      name: 'email',
      type: 'text',
      register: register({
        required: 'Մուտքագրեք ձեր էլ-հասցեն',
        validate: value => validateEmail(value) || 'Մուտքագրեք ճիշտ էլ-հասցե'
      })
    }, {
      label: 'Գաղտնաբառ',
      placeholder: 'Գաղտնաբառ',
      name: 'password',
      type: 'password',
      register: register({
        required: 'Մուտքագրեք ձեր գաղտնաբառը',
        validate: value => validatePassword(value) || '1 uppercase, 1 lowercase, 1 number, 1 special character and must be min 8 length'
      })
    }, {
      label: 'Կրկնել գաղտնաբառը',
      placeholder: 'Կրկնել գաղտնաբառը',
      name: 'conf_password',
      type: 'password',
      register: register({
        required: 'Կրկնեք գաղտնաբառը',
        validate: value =>
          value === password.current || 'Գաղտնաբառերը չեն համընկնում'
      })
    },
  ] : [{
    label: 'Էլ-հասցե',
    placeholder: 'Էլ-հասցե',
    name: 'email',
    type: 'text',
    register: register({
      required: 'Մուտքագրեք ձեր էլ-հասցեն',
    })
  }, {
    label: 'Գաղտնաբառ',
    placeholder: 'Գաղտնաբառ',
    name: 'password',
    type: 'password',
    register: register({
      required: 'Մուտքագրեք ձեր գաղտնաբառը',
      validate: value => validatePassword(value) || '1 մեծատառ, 1 փոքրատառ, 1 թիվ, 1 սիմվոլ և երկարությունը պետք է լինի մինիմում 8'
    })
  }];

  const breadcrumbItems = [
    {
      name: 'Գլխավոր էջ',
      link: '/'
    }, {
      name: (inSignUp ? 'Գրանցում' : 'Մուտք'),
    }
  ];

  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <Spin
        spinning={false}
      >
        <div className='texts-field'>
          <Text level={1} className='sign-up'>{inSignUp ? 'Գրանցում' : 'Մուտք'}</Text> <br />
          <div className='second-text'>
            {
              inSignUp ? (
                <Fragment>
                  <Text level={2}><span>Արդեն գրանցվե՞լ ես՝ </span></Text>
                  <Link to='/sign-in'>
                    <Text level={2}><span>ՄՈՒՏՔ</span></Text>
                  </Link>
                </Fragment>
              ) : (
                <Fragment>
                  <Text level={2}><span>Դեռ չե՞ս գրանցվել՝ </span></Text>
                  <Link to='/sign-up'>
                    <Text level={2}><span>ԳՐԱՆՑՈՒՄ</span></Text>
                  </Link>
                </Fragment>
              )
            }
          </div>
        </div>
        <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-content'>
              {form_item.map((item, index) => (
                <div className='form-item-wrapper' key={index}>
                  <div className='form-item-label'><Text level={2}>{item.label}</Text></div>
                  <div className='form-item-input'>
                    <Input
                      error={!!errors[item.name]}
                      placeholder={item.placeholder}
                      variant='filled'
                      name={item.name}
                      type={item.type}
                      inputRef={item.register}
                    />
                    {errors[item.name] && <span className='error-message'>{errors[item.name].message}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className='sign-in-submit'>
              <Button><Text level='1'>Սեղմել</Text></Button>
            </div>
          </form>
        </div>
      </Spin>
    </Container>
  );
};

export default SignUp;
