import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Enhanced Understanding',
        text: 'GPT-3 will excel at understanding context and user intent, revolutionizing natural language interaction.'
    },
    {
        title: 'Customization and Ethics',
        text: 'GPT-3 will offer tailored models while emphasizing ethical AI and responsible content creation.'
    },
    {
        title: 'Enhanced Understanding',
        text: 'GPT-3 will excel at understanding context and user intent, revolutionizing natural language interaction.'
    },
    {
        title: 'Global Language Access',
        text: 'GPT-3 will break down language barriers, fostering seamless global communication and accessibility to information.'
    },
]
const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>The future of GPT-3 promises an AI-driven world where communication and creativity know no bounds.</p>
            </div>
            {/* Dynamically Rendered Features: 
            .map() function allows to iterate through each item in array 
            unique key assigned to each Feature component to help React efficiently manage and update the components in the virtual DOM. */}
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features