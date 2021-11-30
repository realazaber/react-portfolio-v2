import React from "react";
import Profile from "../../imgs/me.png";

import TechStack from "./TechStack";

import Bounce from 'react-reveal/Bounce'; 

function About() {

    return (
        <div className="container">
            <div id="about">
                <div id="mainInfo">
                    <h2 className="sectionTitlePrimary" id="aboutMeTitle">
                        About me
                    </h2>

                    <Bounce left>
                        <div id="aboutMe">
                            <h2 id="aboutMeText">
                                I have graduated from RMIT in 2021 with an associate degree in IT. I am passionate about all fields of IT 
                                with my favourite being software development. Everyday I strive to learn more.
                            </h2>
                            <TechStack />
                        </div>
                        
                    </Bounce>
                </div>

                <Bounce right>
                    <img id="profileImg" src={Profile} alt="Me" />
                </Bounce>
            </div>
        
        </div>
    )
}

export default About;