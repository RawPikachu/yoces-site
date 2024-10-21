import React from 'react';
import './Style.css';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
import Tilt from 'react-parallax-tilt';

import mountain_svg_1 from '../assets/mountain-1.svg';
// import mountain_svg_2 from '../assets/mountain-2.svg';

import team from '../assets/team';

export const InfoSection = () => (
    <div>
        <div className="info-section">
            {/* I don't get z-index. It could have been cool. */}
            {/* <Parallax className="mountain-image" translateY={[0, 50]}>
                <img src={mountain_svg_2} alt="Mountain" />
            </Parallax> */}
            <Parallax className="mountain-image" translateY={[0, 0]}>
                <img src={mountain_svg_1} alt="Mountain" />
            </Parallax>
            <nav className="navbar">
                <ul>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="faq" smooth={true} duration={500}>FAQ</Link></li>
                    <li><Link to="sponsors" smooth={true} duration={500}>Sponsors</Link></li>
                    <li><Link to="team" smooth={true} duration={500}>Team</Link></li>
                </ul>
            </nav>
            <div id="about" className="about-section">
                <div>
                    <h2>Calling All High School Hackers!</h2>
                    <h3>Get ready to launch your ideas into orbit.</h3>
                    <p>Join us for a weekend of intense problem-solving, engineering, and creativity alongside like-minded students. continue here</p>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <h1>48</h1>
                        <p>Hours</p>
                    </div>
                    <div className="card">
                        <h1>$?</h1>
                        <p>in prizes</p>
                    </div>
                    <div className="card">
                        <h1>150+</h1>
                        <p>Participants</p>
                    </div>
                    <div className="card">
                        <h1>∞</h1>
                        <p>Enjoyment</p>
                    </div>
                </div>
            </div>
            <div id="faq" className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-cards-container">
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                        <div className="faq-card">
                            <h3>What is a hackathon?</h3>
                            <p>A hackathon is an event where people come together to solve problems by building software or hardware projects.</p>
                        </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                        <div className="faq-card">
                            <h3>Who can participate?</h3>
                            <p>All high school students are welcome to participate, regardless of experience level.</p>
                        </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                        <div className="faq-card">
                            <h3>What should I bring?</h3>
                            <p>Bring your laptop, charger, and any other hardware you might need for your project.</p>
                        </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                        <div className="faq-card">
                            <h3>Is there a cost to attend?</h3>
                            <p>No, the event is free for all participants.</p>
                        </div>
                    </Tilt>
                </div>
            </div>
            <div id="sponsors" className="sponsors-section">
                <h2>Our Sponsors</h2>
                <div className="sponsors-container">
                    <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hackclub" className="sponsor-logo" />
                    <img src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Sponsor 2" className="sponsor-logo" />
                </div>
            </div>
            <div id="team" className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <img src={team.leoh} alt="Team Member 1" className="team-member-photo" />
                        <p>Leo Huang</p>
                    </div>
                    <div className="team-member">
                        <img src={team.casperc} alt="Team Member 2" className="team-member-photo" />
                        <p>Casper Chu</p>
                    </div>
                    <div className="team-member">
                        <img src={team.yakshithk} alt="Team Member 3" className="team-member-photo" />
                        <p>Yakshith Kommineni</p>
                    </div>
                    <div className="team-member">
                        <img src={team.andrewd} alt="Team Member 4" className="team-member-photo" />
                        <p>Andrew Dai</p>
                    </div>
                    <div className="team-member">
                        <img src={team.yimingc} alt="Team Member 5" className="team-member-photo" />
                        <p>Yiming Chen</p>
                    </div>
                    <div className="team-member">
                        <img src={team.parsaa} alt="Team Member 6" className="team-member-photo" />
                        <p>Parsa Ahmednezhad</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);