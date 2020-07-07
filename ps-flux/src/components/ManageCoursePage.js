import React, { useState, useEffect } from "react"
import { Prompt } from "react-router-dom"
import CourseForm from "./CourseForm"
import * as courseApi from "../api/courseApi";
import {toast} from "react-toastify"

const ManageCoursePage = props =>{
    const [errors, setErrors] = useState({});
    //debugger;
const [course, setCourse] = useState({
    id: null,
    slug: "",
    title:"",
    authorId: null,
    category:""
})

// when this component load is function will be executed
// we have also declare dependency array, becuase if we did not declare it, whenever there is change in the state we will rerun this effect 
// again the page, which is not required, but by specifying dependency array, whenevr there is change in this state, it will rerun this effect
useEffect(() =>{
    const slug = props.match.params.slug; // from the path '/courses/:slug';
    if(slug){
        courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
    }
    // below means if slug in the URL changes, we should rerun the effect
}, [props.match.params.slug]);

function handleChange(event){
    // this copies couese object, and set title property
    // compute property, set a property on this object based on the value of this variable
    const updatedCourse = {...course, [event.target.name]: event.target.value}
    setCourse(updatedCourse)

    // below line is similar to the above line, but the above is better
    // updatedCourse.title = event.target.value;
}

function formIsValid(){

    const _errors = {};

    if(!course.title) _errors.title = "Title is required";
    if(!course.authorId) _errors.authorId = "AuthorId is required";
    if(!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    // Form is valid if the erros object has no properties
    // to do that we are using javascript feature object.keys
    // it reruns an array of object keys
    return Object.keys(_errors).length === 0;
}

function handleSubmit(event){
    // this will prevent page from posting back to the server
    event.preventDefault();
    if(!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
        props.history.push("/courses");
        toast.success("Saved");
    });
}
    return(
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} errors={errors}></CourseForm>
            <Prompt when={true} message="Are you sure you want to leave?"/>
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage;