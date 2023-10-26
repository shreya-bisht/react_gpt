import React from 'react'
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';
import './blog.css';

const Blog = () => {
    return (
        <div className='="gpt3__blog section__padding' id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog1} date="Oct 19, 2023" title="DALL·E 3 in ChatGPT" para="ChatGPT can now create unique images from a simple conversation—and this new feature is available to Plus and Enterprise users today. Describe your vision, and ChatGPT will bring it to life by providing a selection of visuals for you to refine and iterate upon. You can ask for revisions right in the chat. This is powered by our most capable image model, DALL·E 3."/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog2} date="Sep 25, 2023" title="ChatGPT can now see, hear, and speak" />
                    <Article imgUrl={blog3} date="Sep 19, 2023" title="OpenAI Red Teaming Network" />
                    <Article imgUrl={blog4} date="Aug 31, 2023" title="Teaching with AI" />
                    <Article imgUrl={blog5} date="Aug 22, 2023" title="GPT-3.5 Turbo fine-tuning and API updates" />
                </div>
            </div>
        </div>
    )
}

export default Blog