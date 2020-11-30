import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import Container from '../Container';
import './index.scss'

const SignIn = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    return <Container>
            <div className='l-content'>
                <div className='l-h1'><h1>Sign In</h1></div>
                <div className='l-question'>Don't have an account?  <Link to="/sign-up"><span>Sign Up</span></Link></div>
                <div className='l-form-content'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <div>
                           <label htmlFor="">Email</label>
                           <input
                               name="email"
                               type='email'
                               ref={register({
                                   required: "You must specify a email",
                               })}
                           />
                       </div>
                        {errors.email && <p>{errors.email.message}</p>}
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
                        {errors.password && <p>{errors.password.message}</p>}
                        <div className='l-button'><button>SUMBIT</button></div>
                    </form>

                </div>
            </div>
        </Container>
}

export default SignIn