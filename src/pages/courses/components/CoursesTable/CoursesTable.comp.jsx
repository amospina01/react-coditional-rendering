import React from 'react';
import  './CoursesTable.style.css'
import CoursesCategoryRow from '../CoursesCategoryRow/CoursesCategoryRow.comp'
import CoursesRow from '../CoursesRow/CoursesRow.comp'
import StudentsRow from '../StudentsRow/StudentsRow.comp'




const CoursesTable = () => {
    return(
        <div className='CoursesTable-container'>
                  
            <CoursesCategoryRow categoryName="Estadistica"/>
            <StudentsRow/>
            <CoursesRow Courses={{
                name:"Andres Lopez",
                grade: 3,
                gender:"Male",
            }} />
            <CoursesRow Courses={{
                name:"Sandra Ortiz",
                grade: 2.9,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Carolina Santa",
                grade: 5,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Pedro Santa",
                grade: 2.3,
                gender:"Male",
            }} />
            <CoursesRow Courses={{
                name:"Guillermo Santa",
                grade: 1.3,
                gender:"Male",
            }} />
            <CoursesRow Courses={{
                name:"Andrea Ospina",
                grade: 3.7,
                gender:"Female",
            }} />

            <CoursesCategoryRow categoryName="Fisica"/>
            <StudentsRow/>
            <CoursesRow Courses={{
                name:"Carlos Herrera",
                grade: 3.2,
                gender:"Male",
            }} />
            <CoursesRow Courses={{
                name:"Paola Ortiz",
                grade: 4.9,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Carolina Correa",
                grade: 2.7,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Andrea Santa",
                grade: 3.3,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Daniela Correa",
                grade: 4.3,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Alejandra Perez",
                grade: 4.7,
                gender:"Female",
            }} />

            <CoursesCategoryRow categoryName="Matematicas"/>
            <StudentsRow/>
            <CoursesRow Courses={{
                name:"Luis Sanchez",
                grade: 4.2,
                gender:"Male",
            }} />
            <CoursesRow Courses={{
                name:"Cristina Ortiz",
                grade: 2.9,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Santiago Lopez",
                grade: 1.7,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Beatriz Santa",
                grade: 3.6,
                gender:"Female",
            }} />
            <CoursesRow Courses={{
                name:"Daniel Osorio",
                grade: 4,
                gender:"Male",
            }} />
            <CoursesRow Courses={{
                name:"Fernando Rivera",
                grade: 0.7,
                gender:"Male",
            }} />
            
            
                                    
        </div>

        
    );
}

export default CoursesTable;