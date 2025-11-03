import React from 'react'

function Student({name , age , cource}){
    return(
        <div>
            <h3>{name}</h3>
            <p>Age :{age}</p>
            <p>Course : {cource}</p>
        </div>
    );
}

export default Student;