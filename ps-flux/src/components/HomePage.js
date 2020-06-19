// this ES import syntax, this line means import npm package called React, and set it to a variable called react
import React from "react";

// here we are creating a component using a function
// Component name should start with capital letter
// we start with capital letter for 2 reasons:
//  1- JS Convention to use PascalCase for things that can be instantiated
//  2- elements in JSX that start with capital letter are assumed to be react components. Lowercase elements are assumed to be native HTML
// function components render whatever JSX we return
// by default, everything in each file is private
function HomePage() {
  return (
    <div ClassName="jumbotron">
      <h1>Pluralsight Administartion</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
    </div>
  );
}

// here we use export so that it can be used with other files
// here using the keyword default is optional, traditionally if only single item is being exported, it is declared as the "default"
// also default requires less code to import, and the file that make the import can decide what to name that import
export default HomePage;
