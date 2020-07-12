import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionType from "./actionTypes";

// this is just a plain function.
// what is the first step of saving a course? 
//  1- firstly we have to call our API.
// this entire function is an action creator
export function saveCourse(course){
    // this function returns a promise, so we can use .then to handle response.
    // it is a good idea to have return statement, to return the promise that is generated here, so the caller
    // will be notified when the promise resolves. it can be used for example for loading message on the course form while
    // the save is in progress and hide it when the saveCourse API call returns here. we also can notifies the user in the course form, if the 
    // API call fails.
    return courseApi.saveCourse(course).then(savedCourse => {
        // now we will call dispatch function. the dispatch function expects us to pass an action.
        // an "action" is an "object" with an "actionType" property. 
        
        // below lines mean: Hey dispatcher, go tell all the stores that a course  was just created.
        // we have not created any stores, but when this code runs, all stores that care about this action will be notified
        // and they can update themselves using this payload.
        dispatcher.dispatch({
            // here is the action object
            // actionType is the only required property. the rest of the action can have whatever properties we want.
            // we want to pass savedCourse as a part of the action, so we add it as a second property.
            // note: "actionType" and "course" is called the "action"
            actionType: actionType.CREATE_COURSE, //"CREATE-COURSE",
            course: savedCourse
        });
    })
}


// this is our first action creator, so think of action creator as a handy helper that wraps our actions.
// 