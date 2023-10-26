import React, { useState } from 'react'  // useState-allows to add state to functional components.
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; // ri- react-icons
import logo from '../../assets/logo.svg';
import './navbar.css';

//  BEM -> Block Element Modifier (naming convention for classname) that promotes modularity, maintainability, and reusability in web development

const Menu = () => (
    // wrapped in react fragment  
    <> 
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT-3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)
// Functional components take in data (props) and return JSX to describe what should be rendered on the screen.
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false); 
    // menu is initially closed
//  setToggleMenu function is used to update the state.
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">  
                                         {/* menu toggle button */}
                {toggleMenu 
                // conditional rendering  true->displays close icon (RiCloseLine) 
                //                                   false->displays the open menu icon (RiMenu3Line)
                // When clicked, the icons call onClick handler, which updates the toggleMenu state to 
                // either true (to open the menu) or false (to close the menu).
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (   // true->content is displayed  false->content is hidden
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
                    </div>
        </div>
            );
};

            export default Navbar;