// look into the URL and decide which page should be rendered
// this way is not good because posting back to the server. so it is slower, and we lose client-side state

import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

// we do the routing by watching the URL.
// we want the header to be always render, and we need the correct page to be rendered below the Header.
// the Route Component takes 2 parameters, the URL, and the name of the component.
// we use the keyword "exact" prop, because if we did not write it, it will show the home page with courses, and with About page.
// because in their URL they have "/".

// we still have a problem, you will find that when navigating, the page is completely reloaded, so we need to avoid page reloads
// by navigating completely on the client.

function App() {
  return (
    <div className="container-fluid">
      
    <Header />
    <Switch>
      <Route path="/" exact component = {HomePage}/>
      <Route path="/courses" component = {CoursesPage}/>
      <Route path="/about" component = {AboutPage}/>
      <Route path="/course/:slug" component={ManageCoursePage}/>
      <Redirect from="/about-page" to="/about"/>
      <Route component = {NotFoundPage}/>      
    </Switch>
    </div>
  );
}

export default App;
