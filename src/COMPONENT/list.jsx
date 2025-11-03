import React from "react";

function StudentList(){
    const student = ["Chandresh", "Dhiraj", "Akash", "Aditya", "Vishal", "Shlok", "Ritesh", "Harsh", "Shivam"];

    return(
        <div>
            <h2>Student List</h2>
            <ul>
                {student.map((name, index)=>
                    <li key={index}>{name}</li>
                )}
            </ul>
        </div>
    );
        
}

export default StudentList;