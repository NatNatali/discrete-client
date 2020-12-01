import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Button from "../Button";
import './index.scss'
import Container from "../Container";
import {Link} from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => { console.log(data) }
    return <Container>
        <div className='r-texts'>
            <div className='r-title'>Գրանցում</div>
            <div className='r-question'>Եթե արդեն ունես account <Link to="/sign-in"><span>մուտք գործիր</span></Link></div>
        </div>
        <div className='r-form-content'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Անուն</label>
                    <input
                        className={errors.first_name ? 'red-input' : 'input'}
                        name="first_name"
                        type='text'
                        ref={register({
                            required: "You must specify your first name",
                        })}
                    />
                </div>
                {errors.first_name && <p className='r-error'>{errors.first_name.message}</p>}
                <div>
                    <label htmlFor="">Ազգանուն</label>
                    <input
                        className={errors.last_name ? 'red-input' : 'input'}
                        name="last_name"
                        type='text'
                        ref={register({
                            required: "You must specify your last name",
                        })}
                    />
                </div>
                {errors.last_name && <p className='r-error'>{errors.last_name.message}</p>}
                <div>
                    <label htmlFor="">Էլ-հասցե</label>
                    <input
                        className={errors.email ? 'red-input' : 'input'}
                        name="email"
                        type='email'
                        ref={register({
                            required: "You must specify an email",
                        })}
                    />
                </div>
                {errors.email && <p className='r-error'>{errors.email.message}</p>}
                <div>
                    <label htmlFor="">Գաղտնաբառ</label>
                    <input
                        className={errors.password ? 'red-input' : 'input'}
                        name="password"
                        type='password'
                        ref={register({
                            required: "You must specify a password",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }})
                        }
                    />
                </div>
                {errors.password && <p className='r-error'>{errors.password.message}</p>}
                <div>
                    <label htmlFor="">Կրկնել գաղտնաբառը</label>
                    <input
                        className={errors.conf_password ? 'red-input' : 'input'}
                        name="conf_password"
                        type='password'
                        ref={register({
                            required: "You must confirm your password",
                            validate: value =>
                                value === password.current || "The passwords do not match"
                        })
                        }
                    />
                </div>
                {errors.conf_password && <p className='r-error'>{errors.conf_password.message}</p>}
                <Button />
            </form>
        </div>
    </Container>
}

export default SignUp