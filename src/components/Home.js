import React from 'react';
import Nav from "./Nav.js";
import Welcome from "./Welcome.js";
import About from './About/About.js';
import Projects from "./Projects/Projects.js";
import Contact from "./Contact.js";

function Home() {
    return (
        <div>
              <Nav />
              <Welcome/>
              <About/>
              <Projects/>
              <Contact/>
        </div>
    )
}

export default Home
