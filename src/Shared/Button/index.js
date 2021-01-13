import React from 'react'
import './index.scss'
import Text from "../Text";

const Button = ( { children, onClick } ) => {
    return <button type='submit' name='submit' onClick={onClick} className='button-component'>
                {children}
        </button>
}

export default Button;