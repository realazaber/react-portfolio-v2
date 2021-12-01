import React from 'react';
import Nav from "./Nav.js";
import Welcome from "./Welcome.js";
import About from './About/About.js';
import Projects from "./Projects/Projects.js";
import Contact from "./Contact.js";
import { Fragment } from 'react';

function Home() {
    return (
        <Fragment>
              <Nav />
              <Welcome/>
              <About/>
              <Projects/>
              <Contact/>
        </Fragment>
    )
}

export default Home
