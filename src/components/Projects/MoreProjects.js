import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";

import ProjectsData from "./ProjectsData.json";
import Project from './Project';
import Fade from 'react-reveal/Fade';


function MoreProjects() {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [category, setCategory] = useState("All");

    const categories = [];

    ProjectsData.map((projectInfo, index) => {
                            
        if (!categories.includes(projectInfo.category)) {
            categories.push(projectInfo.category);
        }
        return (null);
        
    })

    function displayCategory(category) {
        return (
            <div id="projectsCategory">
                
                {
                    ProjectsData.map((projectInfo, index) => {

                        //If the all option is selected, show all projects.
                        if (category === "All") {
                            return (
                                <Fade>
                                    <Project
                                        key={index}
                                        img={projectInfo.img}
                                        altTxt={projectInfo.altTxt}
                                        category={projectInfo.category}
                                        description={projectInfo.description}
                                        linkRepo={projectInfo.linkRepo}
                                        linkWebsite={projectInfo.linkWebsite} 
                                    /> 
                                </Fade>
                                
                            )
                        }
                        //If another category is selected then only show
                        //Projects in that category.
                        else {
                            if (projectInfo.category === category) {
                                return (
                                    <Fade>
                                        <Project
                                            key={index}
                                            img={projectInfo.img}
                                            altTxt={projectInfo.altTxt}
                                            category={projectInfo.category}
                                            description={projectInfo.description}
                                            linkRepo={projectInfo.linkRepo}
                                            linkWebsite={projectInfo.linkWebsite} 
                                        />  
                                    </Fade>
                                )
                            }
                            else {
                                return(null);
                            }
                        }
                    })

                }
            
            </div>
        )
    }
   

    return (

        <Fragment>            

            <div id="moreProjectsHeading">

                <Fade bottom>
                    <h1 className="sectionTitlePrimary">
                        More projects
                    </h1>
                </Fade>
                <Link to="/" id="btnBack">
                    Back
                </Link>
            </div>


            {/* Load all projects */}
            <div id="moreProjectsNav">
                <div id="desktopView">
                    <button value="All" className="btnProjectsNav" onClick={() => {setCategory("All")}}>
                        All
                    </button>
                    {
                        categories.map((category, index) => {
                            return (
                                <button className="btnProjectsNav" value={category} onClick={() => {setCategory(category)}}>
                                    {category}
                                </button>
                            )
                        })                                                
                    }


                </div>
            </div>
            <div id="mobileView">
                <select id="categorySelector" onChange={(event) => {setCategory(event.target.value)}}>
                    <option value="All">
                        
                            All projects
                        
                        
                    </option>
                    {
                        categories.map((category, index) => {
                            return (
                                <option value={category}>
                                    {category}
                                </option>
                            )
                        })

                        
                    }

                </select>
            </div>
            {
                displayCategory(category)
            }

        </Fragment>
    )
}

export default MoreProjects
