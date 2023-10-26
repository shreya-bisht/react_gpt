import React, { Component } from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

// App component is defined as a functional component using an arrow function
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
             {/* usestate to manage the state of toggleMenu */}
                <Navbar />    
                {/* image-variables dynamic source */}
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            {/* it uses featuresData array to dynamically render feature descriptions */}
            <Features />  
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App