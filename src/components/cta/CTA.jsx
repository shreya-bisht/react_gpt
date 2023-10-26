import React from 'react'
import './cta.css';

const CTA = () => {
    return (
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request early access for GPT-5</p>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
            <div className="gpt3__cta-btn">
                <a href="https://chat.openai.com/"><button type="button">Get Started</button></a>
            </div>
        </div>
    )
}

export default CTA