import React from 'react'
import './article.css';

const Article = ({ imgUrl, date, title, para }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={ imgUrl } alt="blog" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p> {date} </p>
                    <h3> {title} </h3>
                    <p> {para} </p>
                </div>
                <a href="https://openai.com/blog"><p>Read Full Article</p></a>
            </div>
        </div>
    )
}

export default Article