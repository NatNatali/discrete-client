import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import Container from '../Container';
import Button from "../Button";
import './index.scss'

const SignIn = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    return <Container>
            <div>
                <div className='l-texts'>
                    <div className='l-h1'>Մուտք</div>
                    <div className='l-question'>Եթե չունես account  <Link to="/sign-up"><span>գրանցվիր</span></Link></div>
                </div>
                <div className='l-form-content'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <div className='email-input'>
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
                        {errors.email && <p className='l-error'>{errors.email.message}</p>}
                        <div className='pass-input'>
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
                        {errors.password && <p className='l-error'>{errors.password.message}</p>}
                        <Button />
                    </form>

                </div>
            </div>
        </Container>
}

export default SignIn