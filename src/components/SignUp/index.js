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
                minLength: {
                    value: 8,
                    message: "Գաղտնաբառը պետք է ունենա 8 նիշ"
                }
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
            minLength: {
                value: 8,
                message: "Գաղտնաբառը պետք է ունենա 8 նիշ"
            }
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
        <div className='empty-div' />
        <div className='form-container'>
            <div className='form-content'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {form_item.map((item, index) => {
                        return <div className='form-item-wrapper' key={index}>
                            <div className='form-item-label'>{item.label}:</div>
                            <div className='form-item-input'><Input
                                placeholder={item.placeholder}
                                variant='filled'
                                name={item.name}
                                type={item.type}
                                ref={item.register}
                            /></div>
                        </div>
                    })}
                    <Button />
                </form>
            </div>
        </div>
        <div className='empty-div2'/>
    </Container>
}

export default SignUp