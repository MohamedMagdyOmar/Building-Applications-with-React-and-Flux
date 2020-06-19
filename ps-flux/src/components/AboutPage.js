import React from "react";

// here we are crating component using class instead of function
class AboutPage extends React.Component {
  // React.Component need us to implement render function
  render() {
    // this line will give error because JSX compiled down to function calls. you can only have one top-level function
    // which means we should have only one top element in JSX
    // to solve this problem we can wrap it in a div

    /*return <h2>about</h2>
        <p></p>
        */

    // but if we do that, then we using div that we do not need, instead we can use ReactFragment
    /*return <React.Fragment>
        <h2>about</h2>
        <p></p>
        </React.Fragment>
        */

    // another better solution is use an empty tag, which is short way to specify a fragment
    return (
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
      </>
    );
  }
}

export default AboutPage;
