import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT-3?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Gpt-3</p>
                    <p>032-132546</p>
                    <p>ingo@gpt.in</p>
                </div>
                <div className="gpt3__footer-copyright">
                    <p>© 2021 GPT-3. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer