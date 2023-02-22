import React, { useState } from "react";

import { Navigate } from "react-router-dom";

function Login() {

const[isSubmit , setIsSubumit]=useState(false);

  const handleSubmit = (event)=>{
    event.preventDefault()
     setIsSubumit(true)
  }

  if(isSubmit){
    return<Navigate to={{pathname: '/dashboard'}}/>
  }

  return (
    <>
      <div className="container login">
        <form onSubmit={handleSubmit} >
          <label htmlFor="user_name" className="lab">
            User_Name
          </label>
          <input type="text" className="inp-val" required/>
          <label htmlFor="password" className="lab">
            Password
          </label>
          <input type="password" className="inp-val" required/>
          <button type="submit" className="btn btn-secondary submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
