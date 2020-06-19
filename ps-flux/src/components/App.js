// look into the URL and decide which page should be rendered
// this way is not good because posting back to the server. so it is slower, and we lose client-side state

import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }

  return (
    <div class="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
