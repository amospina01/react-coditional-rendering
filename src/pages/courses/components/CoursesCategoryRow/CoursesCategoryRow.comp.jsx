import React from 'react';
import  './CoursesCategoryRow.style.css'

const CoursesCategoryRow = (props) => {
    return(
        <div className="CoursesCategoryRow-container">
            {props.categoryName}      
        </div>
        
    );
}

export default CoursesCategoryRow;