// this is our application entry point.
// create-react-app is configured to looks at index.js to determine what files are in your app
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// this created a const called render that refrences react-dom's render function
// it is equivalent to :
// import ReactDom from 'react-dom';
// const render = ReactDom.render;
import { render } from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom"

// render function accepts 2 arguments
// the first argument is the component that we want to render -> homepage component
// the second argument we need to tell react which dom element it should render into.

// by wrapping our top level component "App" in the Router Component, we can declare routes in all of our app's
// components now
render(<Router><App /></Router>, document.getElementById("root"));
