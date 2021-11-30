import React from "react";

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


function Home() {

    return (
        <div id="home">
            <div className="container">
        
                <Bounce right>
                <h1 id="welcomeText">
                    Hello there, I am Alex                     
                    <br /> a software engineer in Melbourne 
                </h1>
                </Bounce>
            </div>
        </div>

        
    )
}

export default Home;