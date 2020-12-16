import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const Footer = () => {
    return <div className='f-footer'>
        <div className='footer-section1'>
            <div>Հետադարձ կապ:</div>
            <div>+374 10 56 79 68</div>
            <div>info@polytechnic.am</div>
            <div>Armenia, Yerevan, Teryan 105, 0009</div>
        </div>
        <div className='footer-section2'>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
            <div>Բոլոր հեղինակային իրավունքները պաշտպանված են 2021</div>
        </div>
    </div>
}

export default Footer;