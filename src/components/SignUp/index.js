import React, { useRef, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import Button from "../../Shared/Button";
import './index.scss'
import Container from "../Container";
import {Link} from "react-router-dom";
import Input from "../../Shared/Input";
import { useLocation } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => { console.log(data) }

    let location = useLocation();
    const inSignUp = location.pathname === '/sign-up'
    const pattern = new RegExp('^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).*$')

    const validatePassword = value => {
        if (value.length) {
            return pattern.test(value);
        }
    }

    const form_item = inSignUp ? [
        {
            label: 'Անուն',
            placeholder: 'Անուն',
            name: "first_name",
            type: 'text',
            register: register({
                required: "Լրացրեք ձեր անունը"
            })
        }, {
            label: 'Ազգանուն',
            placeholder: 'Ազգանուն',
            name: "last_name",
            type: 'text',
            register: register({
                required: "Լրացրեք ձեր ազգանունը"
            })
        }, {
            label: 'Էլ-հասցե',
            placeholder: 'Էլ-հասցե',
            name: "email",
            type: 'email',
            register: register({
                required: "Լրացրեք ձեր էլեկտրոնային հասցեն",
            })
        }, {
            label: 'Գաղտնաբառ',
            placeholder: 'Գաղտնաբառ',
            name: "password",
            type: 'password',
            register: register({
                required: "Լրացրեք գաղտնաբառ",
                validate: value => validatePassword(value) || 'password should contain ... and must be min 8 char'
            })
        }, {
            label: 'Կրկնել գաղտնաբառը',
            placeholder: 'Կրկնել գաղտնաբառը',
            name: "conf_password",
            type: 'password',
            register: register({
                required: "Կրկնեք գաղտնաբառը",
                validate: value =>
                    value === password.current || "Ստուգեք ձեր գաղտնաբառը"
            })
        },
    ] : [{
        label: 'Էլ-հասցե',
        placeholder: 'Էլ-հասցե',
        name: "email",
        type: 'email',
        register: register({
            required: "Լրացրեք ձեր էլեկտրոնային հասցեն",
        })
    }, {
        label: 'Գաղտնաբառ',
        placeholder: 'Գաղտնաբառ',
        name: "password",
        type: 'password',
        register: register({
            required: "Լրացրեք գաղտնաբառ",
            validate: value => validatePassword(value) || '1 uppercase, 1 lowercase, 1 number, 1 special character and must be min 8 length'
        })
    }];

    return <Container>
        <div className='texts-field'>
            <div className='sign-up'>{inSignUp ? 'Sign Up' : 'Sign In'}</div> <br/>
            <div className='second-text'>
                {
                    inSignUp ? (
                        <Fragment>
                            <span>Already have an account?</span>
                            <Link to="/sign-in">
                                <span>Sign In</span>
                            </Link>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <span>Don't have an account?</span>
                            <Link to="/sign-up">
                                <span>Sign Up</span>
                            </Link>
                        </Fragment>
                    )
                }
            </div>
        </div>
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-content'>
                    {form_item.map((item, index) => {
                        return <div className='form-item-wrapper' key={index}>
                            <div className='form-item-label'>{item.label}</div>
                            <div className='form-item-input'>
                                <Input
                                    placeholder={item.placeholder}
                                    variant='filled'
                                    name={item.name}
                                    type={item.type}
                                    inputRef={item.register}
                                />
                                {errors[item.name] && <span>{errors[item.name].message}</span>}
                            </div>
                        </div>
                    })}
                </div>
                <Button />
            </form>
        </div>
    </Container>
}

export default SignUp