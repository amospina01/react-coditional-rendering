import React from 'react';
import  './CoursesRow.style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMale} from '@fortawesome/free-solid-svg-icons';
import {faFemale} from '@fortawesome/free-solid-svg-icons';

const CoursesRow = (props) => {
    return(
        <div >
            <div className='CoursesRow-container'>

                {props.Courses.name}{'    '}

                {
                    props.Courses.grade < 3
                    ?
                        
                        <span className='Courses-perdido'>{props.Courses.grade}</span>
                    :
                    <span>{props.Courses.grade}</span>

                }

                
                {'     '} {props.Courses.gender}{' '}

                {
                    props.Courses.gender === 'Female'
                    ?
                        
                        <FontAwesomeIcon icon={faFemale}/>
                    :
                    <FontAwesomeIcon icon={faMale}/>

                }


                
                
            </div>

        </div>
    );
}

export default CoursesRow;