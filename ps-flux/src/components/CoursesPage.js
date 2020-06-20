import React from "react";

// this will call our mock api to get a list of courses
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  // we need to show list of courses when this page/component loads.
  // to do that we need to call our first life cycle method
  // the component must be mounted before we call set state
  componentDidMount() {
    // if you check below method, you will find fetch method is used, which is promise-based API.
    // here you call then function, to handle the response.
    // promises are away to handle async call, you can also use async/await if you prefer.
    // promises represent future values. then function will recieve array of courses

    //getCourses().then(function (courses) {
    // this.state.courses = courses; // do not do that, but use setState as follow
    // note: setState calls only update the properties you specify
    // this.setState({ courses: courses });
    //});

    // you can use arrow function like this
    // this line says: getCourses from the API. when the call completes, store the array of courses in state
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>AuthorId</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course) => {
              return (
                <tr>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
