import React, { useState } from "react"
import { Prompt } from "react-router-dom"
import CourseForm from "./CourseForm"
const ManageCoursePage = props =>{
    //debugger;
const [course, setCourse] = useState({
    id: null,
    slug: "",
    title:"",
    authorId: null,
    category:""
})

function handleTitleChange(event){
    // this copies couese object, and set title property
    const updatedCourse = {...course, title: event.target.value}
    setCourse(updatedCourse)

    // below line is similar to the above line, but the above is better
    // updatedCourse.title = event.target.value;
}
    return(
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onTitleChange={handleTitleChange}></CourseForm>
            <Prompt when={true} message="Are you sure you want to leave?"/>
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage;