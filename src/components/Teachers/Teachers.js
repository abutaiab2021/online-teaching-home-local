import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import Teacher from '../Teacher/Teacher'
import './Teachers.css'

function Teachers() {
    const [teachers,setTeachers] = useState([])
    useEffect(()=>{
        fetch('./teachers.JSON')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])
    return (
        <div className="container mt-2">
            <div className="teachers">
            {
                teachers.map(teacher => <Teacher
                    key={teacher.id} 
                    teacher={teacher}
                    ></Teacher>)
            }
        </div>
        </div>
    );
};

export default Teachers
