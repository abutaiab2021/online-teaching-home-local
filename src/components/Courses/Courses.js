import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
        const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="container mt-2">
            <div className="courses">
            {
                courses.map(course => <Course
                    key={course.id} 
                    course={course}
                    ></Course>)
            }
        </div>
        </div>
    );
};

export default Courses;