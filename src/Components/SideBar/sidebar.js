import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Store";
import './style.css'

const Sidebar = ()=>{
  const [userID,setID] = useContext(Context);
    return(
      <div className="home">
        <div className="sidebar" data-color="white" data-active-color="danger">
          <div className="logo">
            <a href="a" id="emailid" className="simple-text logo-normal">
              Hospital Monitor System
            </a>
          </div>
          <div className="sidebar-wrapper">
            {!userID?
            <ul className="nav">
              <li id="home">
                <Link to="/">
                  <i className="nc-icon nc-bank"></i>
                  <p>Home</p>
                </Link>
              </li>
              <li id="dashboard">
                <Link to="/signIn">
                  <i className="nc-icon nc-layout-11"></i>
                  <p>Sign In</p>
                </Link>
              </li>
              <li id="questionnaire">
                <Link to="/signUp">
                  <i className="nc-icon nc-bullet-list-67"></i>
                  <p>Sign Up</p>
                </Link>
              </li>
            </ul>
            :
            <ul className="nav">
              <li id="home">
                <Link to="/">
                  <i className="nc-icon nc-bank"></i>
                  <p>Home</p>
                </Link>
              </li>
              <li id="Update">
                <Link to={`/update/${userID}`}>
                  <i className="nc-icon nc-bank"></i>
                  <p>Update</p>
                </Link>
              </li>
            </ul>
            }
          </div>
        </div>
      </div>
    )
}

export default Sidebar