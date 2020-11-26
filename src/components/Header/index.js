import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return <div>
        <div>
            <div><Link to="/sign-in">Sign In</Link></div>
            <div><Link to="/sign-up">Sign Up</Link></div>
        </div>
    </div>
}

export default Header