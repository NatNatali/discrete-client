import React from 'react';
import './index.scss';
import Container from '../Container';
import Button from '../../Shared/Button'
import { Carousel, Card } from 'antd';
import {Link} from "react-router-dom";
import carouselImage1 from '../../images/carouselImage1.jpg'
import carouselImage2 from '../../images/carouselImage2.jpg'
import carouselImage3 from '../../images/carouselImage3.jpg'
import carouselImage4 from '../../images/carouselImage4.png'


const Home = () => {
    return <Container>
        <div className='random-text-container'>
            <div>Learn Discrete math with us</div>
        </div>
        <Button buttonName='Սկսել դասը' className='button-homepage'/>
        <div className='article-title'>Հետաքրքիր հոդվածներ</div>
        <Carousel dots={{className: 'hp-carousel-dots'}} autoplay>
            <div className='contentStyle'>
                <a href="https://artofproblemsolving.com/news/articles/discrete-math?fbclid=IwAR3VS-hMuMojdT03xx7bbt_xRXpf1_1anLS1xQVbc8MUhw9czR8qW1FYigs" target='_blank' className='homepage-carousel-card'>
                    <Card title="Why Discrete Math Is Important" >
                        <img src={carouselImage1} className='carousel-img' alt=""/>
                    </Card>
                </a>
                <a href="https://randerson112358.medium.com/what-is-discrete-math-367a4533fc46" target='_blank' className='homepage-carousel-card'>
                    <Card title="Mathematics For Computer Science" >
                        <img src={carouselImage2} className='carousel-img' alt=""/>
                    </Card>
                </a>
            </div>
            <div className='contentStyle'>
                <a href="http://www.mathily.org/dm-rw.html?fbclid=IwAR2HQxU2UEO1KtRYlRNM3lK5ZJTkaO0ExP_vNixzOSw5_nep-zGUFH41ARo" target='_blank' className='homepage-carousel-card'>
                    <Card title="Discrete Mathematics in the Real World" >
                        <img src={carouselImage3} className='carousel-img' alt=""/>
                    </Card>
                </a>
                <a href="https://en.wikipedia.org/wiki/Discrete_mathematics?fbclid=IwAR3B-gfgOsrJnZTTNnTgFQBY4IPWOsIpz1evld153m7eMi5c4i110H4sM1c" target='_blank' className='homepage-carousel-card'>
                    <Card title="What Is Discrete mathematics" >
                        <img src={carouselImage4} className='carousel-img' alt=""/>
                    </Card>
                </a>
            </div>
        </Carousel>
    </Container>
}

export default Home