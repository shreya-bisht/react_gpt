import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility"></img>
            </div>
            <div className="gpt3__possibility-content" >
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>The possibilities with GPT-3 are as vast as your imagination can reach. It's the key to redefining how we communicate, create content, and innovate across various domains. From chatbots that understand emotions to content that writes itself, GPT-3 is like a language wizard ready to assist you. So, whether you're in education, healthcare, or any industry, the future with GPT-3 is a playground of endless creativity and efficiency. Just remember, as you step into this AI-powered world, ethics and responsibility should always be your trusted companions.</p>
                <h4>It's opening new frontiers in AI applications</h4>
            </div>
        </div>
    )
}

export default Possibility