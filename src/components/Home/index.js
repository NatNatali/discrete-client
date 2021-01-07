import React from 'react';
import './index.scss';
import Container from '../Container';
import Button from '../../Shared/Button'
import {Link} from "react-router-dom";


const Home = () => {
    return <Container>
        <div className='random-text-container'>
            <div>Մաթեմատիկան պետք է սիրել թեկուզ նրա համար, որ կարգի է բերում մեր միտքը։</div>
        </div>
        <Link to={'/lesson'}><Button buttonName='Սկսել դասը' className='button-homepage'/></Link>
        <div className='about-us'>
            <div className='about-us-title'>Մեր մասին</div>
            <div className='about-us-content'>

            </div>
        </div>
        <div className='article-hp'>
            <div className='article-title'>Հետաքրքիր հոդվածներ</div>
            <div className='article-content'></div>
        </div>
    </Container>
}

export default Home