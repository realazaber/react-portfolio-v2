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
                                I am passionate about all fields of Software Development, especially web development. 
                                I always strive to create amazing applications and websites that help solve problems 
                                while also delivering the a great user experience.
                                <br /><br />
                                I also have an Associate Degree in IT from RMIT.
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