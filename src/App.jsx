import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Greet from './COMPONENT/Welcome';
// import FormExample from './COMPONENT/Formexample'
// import ToggleMessage from './COMPONENT/Togglemsg'
// import StudentList from './COMPONENT/list'
import Student from './COMPONENT/Student'
// import LoginMessage from './COMPONENT/Conditional'

function App() {
  const students = [
    { id: 1, name: "Chandresh Dubey", age: 20, course: "Computer Science" },
    { id: 2, name: "Aarav Mehta", age: 21, course: "Information Technology" },
    { id: 3, name: "Riya Sharma", age: 19, course: "Software Engineering" },
  ];

  return (
    <div>
      {/* <Test /> */}
      {/* <Welcome/> */}
      {/* <Greet/> */}
      {/* <ToggleMessage/>   */}
      {/* <FormExample/> */}
      {/* <StudentList/> */}
      {/* <LoginMessage/>  */}

    
        <h2>Student List</h2>
        {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}

    </div>
  );
}

export default App;




