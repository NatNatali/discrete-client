import React from 'react'
import './index.scss'

const Button = ( { buttonName } ) => {
    return <div className='button-container'>
            <button type='submit' name='submit' className='button-component'>{buttonName}</button>
        </div>
}

export default Button;