import React from "react";
import PropTypes from "prop-types";

function CourseList(props){
    return(
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>AuthorId</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}

// we can be more explicit by declaring the shape of the object that this array should hold
CourseList.prototype = {
    courses: PropTypes.array.isRequired
}

// we can be more explicit by declaring the shape of the object that this array should hold
CourseList.prototype = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    })).isRequired
}

export default CourseList;