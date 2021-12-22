import React from "react";
import './style.css'

const Sidebar = ()=>{
    return(
<div className="home">
<div className="sidebar" data-color="white" data-active-color="danger">
  <div className="logo">
    <a href="a" id="emailid" className="simple-text logo-normal">
      Hospital Monitor System
    </a>
  </div>
  <div className="sidebar-wrapper">
    <ul className="nav">
      <li id="home">
        <a href="/">
          <i className="nc-icon nc-bank"></i>
          <p>Home</p>
        </a>
      </li>
      <li id="dashboard">
        <a href="/signIn">
          <i className="nc-icon nc-layout-11"></i>
          <p>Sign In</p>
        </a>
      </li>
      <li id="questionnaire">
        <a href="/signUp">
          <i className="nc-icon nc-bullet-list-67"></i>
          <p>Sign Up</p>
        </a>
      </li>
    </ul>
  </div>
</div>
</div>
    )
}

export default Sidebar