import React from 'react';
import './index.scss'

const Text = ({level,children}) => {
    return <span className={`level-${level}`}>
        {children}
    </span>;
}

export default Text;