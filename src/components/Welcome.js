import React from "react";

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function Home() {

    return (
        <div id="home">
            <div className="container">        
                <Fade>
                <h1 id="welcomeText">
                    Hello there, I am Alex                     
                    <br /> a software developer in Melbourne 
                </h1>
                </Fade>
                <Bounce>
                    <a href="#about">
                        <button>
                            Lets make something great
                        </button>
                    </a>
                </Bounce>
            </div>
        </div>        
    )
}

export default Home;