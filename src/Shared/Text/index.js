import React from 'react';
import './index.scss'

const Text = ({ level = '4', children, onClick = () => null }) => {
    return <span className={`level-${level}`} onClick={onClick}>
        {children}
    </span>;
}

export default Text;