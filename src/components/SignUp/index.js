import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => { console.log(data) }
    return <div className='main'>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="first-name"
                    type='text'
                    ref={register({
                        required: "You must specify your first name",
                    })}
                />
                {errors.fname && <p>{errors.fname.message}</p>}
                <input
                    name="last-name"
                    type='text'
                    ref={register({
                        required: "You must specify your last name",
                    })}
                />
                {errors.lname && <p>{errors.lname.message}</p>}
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
                <input
                    name="conf_password"
                    type='password'
                    ref={register({
                        validate: value =>
                            value === password.current || "The passwords do not match"
                    })
                    }
                />
                {errors.conf_password && <p>{errors.conf_password.message}</p>}
                <button>SUMBIT</button>
            </form>
        </div>
    </div>
}

export default SignUp