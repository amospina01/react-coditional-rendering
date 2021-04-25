import React from 'react';
import CoursesTable from '../CoursesTable/CoursesTable.comp'

import  './FilterableCoursesTable.style.css'


const FilterableCoursesTable = () => {
    return(
        <div className='FilterableCoursesTable-container'>
            
            <CoursesTable/>
            
        </div>
    );
}

export default FilterableCoursesTable;