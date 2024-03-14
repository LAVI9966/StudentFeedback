import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const AdminHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="maindisplay">
        <div className="maindisplay innerdivad">
          <div>
            <h1 className="h111">Welcome Admin</h1>
          </div>
          <div>
            <div>
              <Link to="/feedbacks">
                <button className="btn btn-success">Feedbacks</button>
              </Link>
              <Link to="/managefaculty">
                <button className="btn btn-success">Manage Faculty</button>
              </Link>
              <Link to="/addcourse">
                <button className="btn btn-success">Add Course</button>
              </Link>
            </div>
            <div>
              <Link to="/change-password">
                <button className="btn btn-success">Change password</button>
              </Link>
              <Link to="/logout">
                <button className="btn btn-success">logout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
