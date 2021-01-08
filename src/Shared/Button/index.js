import React from 'react'
import './index.scss'
import Text from "../Text";

const Button = ( { children } ) => {
    return <div className='button-container'>
        <button type='submit' name='submit' className='button-component'>
            <Text level={1}>
                {children}
            </Text>
        </button>
    </div>
}

export default Button;