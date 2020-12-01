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
            <div className='r-title'>Sign Up</div>
            <div className='r-question'>Already have an account? <Link to="/sign-in"><span>Sign In</span></Link></div>
        </div>
        <div className='r-form-content'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input
                        name="first_name"
                        type='text'
                        ref={register({
                            required: "You must specify your first name",
                        })}
                    />
                </div>
                {errors.first_name && <p className='r-error'>{errors.first_name.message}</p>}
                <div>
                    <label htmlFor="">Last Name</label>
                    <input
                        name="last_name"
                        type='text'
                        ref={register({
                            required: "You must specify your last name",
                        })}
                    />
                </div>
                {errors.last_name && <p className='r-error'>{errors.last_name.message}</p>}
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        name="email"
                        type='email'
                        ref={register({
                            required: "You must specify an email",
                        })}
                    />
                </div>
                {errors.email && <p className='r-error'>{errors.email.message}</p>}
                <div>
                    <label htmlFor="">Password</label>
                    <input
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
                    <label htmlFor="">Confirm Password</label>
                    <input
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