import React from 'react'
import './feature.css';

// feature component is designed to display individual features 
// separates the display of feature titles and their descriptions, making it easier to reuse and style feature sections throughout application. 
const Feature = ({title, text}) => { // props as input
    return (
        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container__feature-text">
                <p>{text}</p>
            </div> 
        </div>
    )
}

export default Feature