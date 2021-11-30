import React from "react";
import ProjectsData from "./ProjectsData.json";
import Project from "./Project";

import { Link } from "react-router-dom";

import Bounce from 'react-reveal/Bounce'; 

function Projects() {

    let counter = 0;

    return (
        <div id="projects">
            <div className="container">
                <div id="projectsContent">
                    <h1 className="sectionTitleSecondary">
                        My Projects
                    </h1>
                    
                    <div id="projectsList">
                    
                        {ProjectsData.map((projectInfo, index) => {

                            //Only show first 4 projects. The rest are in more projects.
                            counter++;
                            if (counter <= 6) {
                                return (
                                    <Bounce bottom>                                
                                    <Project
                                        img={projectInfo.img}
                                        altTxt={projectInfo.altTxt}
                                        category={projectInfo.category}
                                        description={projectInfo.description}
                                        linkRepo={projectInfo.linkRepo}
                                        linkWebsite={projectInfo.linkWebsite} 
                                    />      
                                    </Bounce>                           
                                );
                            }
                            else {
                                return (null);
                            }
                        })}
                    
                    </div>            
                    <Link to="/more-projects">                                        
                            <button id="moreProjectsLink">
                                View more
                            </button>                    
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Projects;