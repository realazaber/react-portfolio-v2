import React from "react";
import Profile from "../../imgs/me.png";

import TechStack from "./TechStack";

import Bounce from 'react-reveal/Bounce'; 

function About() {

    return (
        <div>
            <div id="about">
                <h1 className="sectionTitleSecondary">
                    About me
                </h1>
                <div id="mainInfo">
                    <Bounce left>
                        <img id="profileImg" src={Profile} alt="Me" />
                    </Bounce>

                    <Bounce right>
                        <div id="aboutMe">
                            <h1 id="aboutMeText">
                                I have graduated from RMIT in 2021 with an associate degree in IT. I am passionate about all fields of IT 
                                with my favourite being software development. Everyday I strive to learn more.
                            </h1>
                            <TechStack />
                        </div>
                        
                    </Bounce>
                </div>
            </div>
            <br />
        
        </div>
    )
}

export default About;