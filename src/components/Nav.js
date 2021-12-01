import React from "react";

import Slide from 'react-reveal/Slide';
import { Fragment } from "react/cjs/react.production.min";
import logo from "../imgs/logo.png";

function Nav () {

    const openMenu = () => {
        document.getElementById("mobileNav").style.width = "200px";
    }

    const closeMenu = () => {
        document.getElementById("mobileNav").style.width = "0px";
    }

    
    try {
        window.onscroll = function() {scrollFunction()};
    } catch (error) {
        
    }

    const logoMinWidth = "70px";
    const logoMaxWidth = "120px";


    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("azlogo").style.width = logoMinWidth;
        } else {
            document.getElementById("azlogo").style.width = logoMaxWidth;
        }
    }

    return (
        <Fragment>
            
                <nav>
                    <a href="#home">
                        <img id="azlogo" src={logo} alt="logo" width={logoMaxWidth}/>
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
                    About
                </a>
                <a href="#projects" onClick={closeMenu}>
                    Projects
                </a>
                <a href="#contact" onClick={closeMenu}>
                    Contact
                </a>
            </div>
        </Fragment>
        
    );
}

export default Nav;