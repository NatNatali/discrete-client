import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    return <div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="email"
                    type='email'
                    ref={register({
                        required: "You must specify a email",
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
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
                <button>SUMBIT</button>
            </form>
        </div>
    </div>
}

export default SignIn