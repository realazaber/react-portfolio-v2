import React from "react";

import Slide from 'react-reveal/Slide';
import { Fragment } from "react/cjs/react.production.min";

function Nav () {

    const openMenu = () => {
        document.getElementById("mobileNav").style.width = "200px";
    }

    const closeMenu = () => {
        document.getElementById("mobileNav").style.width = "0px";
    }

    return (
        <Fragment>
            
                <nav>
                    <a href="#home">
                        <div id="logo">
                            A.
                        </div>
                    </a>
                    <Slide right>
                        <div id="right">
                            <a href="#about">
                                About 
                            </a>
                            <a href="#projects">
                                Projects
                            </a>
                            <a href="#contact">
                                Contact
                            </a>
                        </div>
                    </Slide>
                </nav>
            

            <button id="mobileMenu"  onClick={openMenu}>
                ☰
            </button>
            <div id="mobileNav">
                <a href="#home" onClick={closeMenu}>
                    Home
                </a>
                <a href="#about" onClick={closeMenu}>
                    About me
                </a>
                <a href="#projects" onClick={closeMenu}>
                    My Projects
                </a>
                <a href="#contact" onClick={closeMenu}>
                    Contact me
                </a>
            </div>
        </Fragment>
        
    );
}

export default Nav;