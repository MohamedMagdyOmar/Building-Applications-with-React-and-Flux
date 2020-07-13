import React, { useEffect, useState } from "react";

// this will call our mock api to get a list of courses
//import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import {Link} from "react-router-dom";
import courseStore from '../stores/courseStore';
import {loadCourses} from '../actions/courseActions'

function CoursesPage() {
  // we start with empty courses
  // now we need our state to use data in flux store, so every time the page get loaded, courses will be initialized
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    // goals:
      // 1- subscribe to Flux store
      // 2- if courses have not been loaded, call loadCourses action

    // accepts a function that is get called when store change
    courseStore.addChangeListener(onChange); // subscribe to flux store

    // since our component is connected to the flux store, when courses are added to the store, onChange below will be called
    if(courseStore.getCourses().length === 0) loadCourses();

    // cleanup on unmount, this function will be called when component unmount(when we navigate to other page)
    //return () => courseStore.removeChangeListener(onchange); 

    //getCourses().then((_courses) => setCourses(_courses));
    // now we get our courses from flux
    //setCourses(courseStore.getCourses())
  }, []);

    function onChange(){
      // when the course store changes, we want to get the blist of courses and update the state.
      // now our component is connected to flux store. but courses in flux store is initialized with an empty array,
      // so we need to request the list of courses if this page is being loaded for the first time.
      setCourses(courseStore.getCourses())
    }
  /*
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
  }*/

  // note: this component is now too simple. it is focused on state concerns.
  // you can consider this change as seperation between "smart" component, and "dump" component.
  // the "smart" component contains the logic for handling the state.
  // so smart component handle state, and logic, while dump component "CourseList" handle markup
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">Add Course</Link>
      <CourseList courses={courses}/>
    </>
  );
}

export default CoursesPage;
