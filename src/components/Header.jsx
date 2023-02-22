import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-danger">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 logo">Logo</span>
          <span className="user">User</span>
        </div>
      </nav>
      <div className="dashboard container">
          <div class="d-grid gap-4 mx-auto button-con">
            <button class="btn btn-outline-dark" 
           data-bs-toggle="button" autocomplete="off" aria-pressed="true" type="button">
            <Link className="lnk" to='/dashboard'>Dashboard</Link> 
            </button>
            <button class="btn btn-outline-dark" data-bs-toggle="button" autocomplete="off" aria-pressed="true" type="button">
            <Link className="lnk" to='/masterlist'>Master list</Link>
            </button>
            <button class="btn btn-outline-dark" data-bs-toggle="button" autocomplete="off" aria-pressed="true" type="button">
            <Link className="lnk" to='/invities'>Invities</Link>
            </button>
            <button class="btn btn-outline-dark" data-bs-toggle="button" autocomplete="off" aria-pressed="true" type="button">
            Connections
            </button>
            <button class="btn btn-outline-dark" data-bs-toggle="button" autocomplete="off" aria-pressed="true" type="button">
              Candidates
            </button>
          </div>
        </div>
    </>
  );
}

export default Header;
