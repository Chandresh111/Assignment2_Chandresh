import React from 'react'

function LoginMessage({isLoggedIn}){
    return(
        <div>


            {isLoggedIn ? <p>You are logged in </p>: <p>Plz log In</p>}

            
        </div>
    );
}

export default LoginMessage;