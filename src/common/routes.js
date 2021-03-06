import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";

//Redux Dumb
import ExperiencePage from "./components/Experience";
import ResumePage from "./components/Resume";
import ProjectPage from "./components/Projects";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="experience" component={ExperiencePage} />
      <Route path="resume" component={ResumePage} />
      <Route path="about" component={AboutPage} />
      <Route path="projects" component={ProjectPage} />
      <Route path="*" component={error404}/>
  </Route>
);
