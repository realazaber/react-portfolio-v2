import React from "react";
import Home from "./components/Home";
import MoreProjects from "./components/Projects/MoreProjects";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/react-portfolio-v2/">
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/react-portfolio-v2/" exact element={<Home />} />
          <Route path="/more-projects" exact element={<MoreProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
