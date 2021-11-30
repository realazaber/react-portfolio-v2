import React from "react";

import Fade from 'react-reveal/Fade';


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
            </div>
        </div>

        
    )
}

export default Home;