import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const Footer = () => {
    return <div className='f-footer'>
        <div className='footer-section1'>
            <div>Contact us:</div>
            <div>+374 10 56 79 68</div>
            <div>info@polytechnic.am</div>
            <div>Armenia, Yerevan, Teryan 105, 0009</div>
        </div>
        <div className='footer-section2'>
            <div>Privacy</div>
            <div>Terms and conditions</div>
            <div>ICONS</div>
        </div>
    </div>
}

export default Footer;