import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art natural language processing (NLP) model developed by OpenAI. It's the third iteration in the GPT series of language models. GPT-3 is known for its impressive ability to generate human-like text, understand context, and perform various language-related tasks."/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="GPT-3 brings chatbots to life, making them excellent conversationalists. They answer questions, provide help, and suggest tailored solutions. In customer support, they're like super-fast problem solvers, making customers happy. And as virtual assistants, they schedule tasks and find information for you." />
                <Feature title="Knowledgebase" text="GPT-3 doesn't just fill knowledge bases; it writes, updates, and refines them. It generates clear answers and new articles, keeping information fresh. It's also a vigilant editor, spotting outdated content and suggesting corrections." />
                <Feature title="Education" text="In education, GPT-3 is your creative tutor. It personalizes lessons, explains complex ideas, and offers practice. It's like a knowledgeable friend who helps with homework, making learning fun. And in language learning, it's your language coach, providing translations and interactive exercises to make learning a breeze. Ethical use is our priority in education." />
            </div>
        </div>
    )
}

export default WhatGPT3