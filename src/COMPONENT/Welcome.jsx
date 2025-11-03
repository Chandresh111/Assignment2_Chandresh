import React from "react";


// function Welcome() {
//     function handleClick() {
//       alert('Button clicked!');
//     }
  
//     return <button onClick={handleClick}>Click Me</button>;
//   }




function Greet (){
    function sayHello(name){
        alert ('hello'+name);

    }
    return <button onClick={()=>{
        sayHello('Chandresh ')
    }}>Greet me</button>
}

export default Greet;
  