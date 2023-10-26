import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content" >
                <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>

                <p>Welcome to the Future of AI-Powered Communication! Our GPT-3 platform empowers you with cutting-edge natural language understanding and generation capabilities. Unleash the potential of AI-driven content, chatbots, and more. Transform your business and experiences with the power of advanced language technology. Get started today!</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                 {/* value src is provided as a variable as a dynamic source */}
                    <img src ={people} alt="people"/>       
                    <p>Join the Wave of Interest - Over 1,600 Enthusiastic Visitors Requested Access in the Last 24 Hours!</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header