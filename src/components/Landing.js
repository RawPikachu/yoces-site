import React from 'react';
import './Style.css'; 
import moon_image from '../assets/moon-image.png';
import { TypeAnimation } from 'react-type-animation';
import { Parallax } from 'react-scroll-parallax';

export const Landing = () => {
    return (
        <Parallax className="container" speed={-50}>
            <div className="content">
                <p className="date-location">January 17 @ Shopify Toronto</p>
            
                <TypeAnimation
                    className="title"
                    cursor={true}
                    speed={{type: 'keyStrokeDelayInMs', value: 200}}
                    sequence={['Hack the Moon']}
                    wrapper="h1"
                    repeat={0}
                />
                <p className="subtitle">Aim for the moon, land on the stars.</p>
                <p className="coming-soon">Coming Soon</p>
            </div>
            <div className="moon-image">
                <img src={moon_image} alt="Moon" />
            </div>
        </Parallax>
    );
}
