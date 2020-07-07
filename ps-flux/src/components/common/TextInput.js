// if you look at "CourseForm.js" you will find that className="form-group" is duplicated for the title and for the category.
// so it is better to create reusable inputs here in seperate js.
// we need to :
// 1- Keep label and input in sync, 2-set classname, 3-declare value


import React from 'react';
import propTypes from "prop-types"

function TextInput(props){
  // we need also to handle dynamic classes(bootstrap) for this component
  let wrapperClass = "form-group";
  if(props.error.length > 0){
    // here we concatenating string to dynamically add an extra class
    wrapperClass += " has-error";
  }
  return(
    //<div className="form-group">
      <div className={wrapperClass}>
        {/*<label htmlFor="title">Title</label>*/}
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            /*id="title"*/
            id={props.id}
            type="text"
            onChange={props.onChange}
            //name="title"
            name={props.name}
            className="form-control"
            //value={props.course.title}
            value = {props.value}
          />
        </div>
        {/*here we are using logical And, which means if left condition is satisfied, then display right hand side(div)*/}
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
  )
}

// since this reusable component will be used by other people, it is important to declare "propTypes" for reusable component
// so they are aware what data need to be passed down, and w get warning if we forget to pas them
TextInput.prototype = {
  id : propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string,
  error: propTypes.string
}

// if no one passed error message, make the default as empty string
TextInput.defaultProps = {
  error: ""
}

export default TextInput;