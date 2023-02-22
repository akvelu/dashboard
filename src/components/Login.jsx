import React from "react";

function Login() {
  return (
    <>
      <div className="container login">
        <form>
          <label htmlFor="user_name" className="lab">
            User_Name
          </label>
          <input type="text" className="inp-val" />
          <label htmlFor="password" className="lab">
            Password
          </label>
          <input type="password" className="inp-val" />
          <button type="button" className="btn btn-secondary submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
