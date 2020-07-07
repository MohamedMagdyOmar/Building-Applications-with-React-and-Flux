import React, { useState } from "react"
import { Prompt } from "react-router-dom"
import CourseForm from "./CourseForm"
import * as courseApi from "../api/courseApi";

const ManageCoursePage = props =>{
    //debugger;
const [course, setCourse] = useState({
    id: null,
    slug: "",
    title:"",
    authorId: null,
    category:""
})

function handleChange(event){
    // this copies couese object, and set title property
    // compute property, set a property on this object based on the value of this variable
    const updatedCourse = {...course, [event.target.name]: event.target.value}
    setCourse(updatedCourse)

    // below line is similar to the above line, but the above is better
    // updatedCourse.title = event.target.value;
}

function handleSubmit(event){
    // this will prevent page from posting back to the server
    event.preventDefault();
    courseApi.saveCourse(course)
}
    return(
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit}></CourseForm>
            <Prompt when={true} message="Are you sure you want to leave?"/>
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage;