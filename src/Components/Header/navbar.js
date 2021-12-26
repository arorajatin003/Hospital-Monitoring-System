import React, { useState,useContext } from "react";
import { Context } from "../../Store";
import './nav.css'
const Navbar = ()=>{
  const [userID,setUserID] = useContext(Context);   
  // const [userID,setUserID] = useState("jatin");   
  return(
    <div className="nav">
    <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <form>
                  <div className="input-group no-border">
                    <input type="text" value="" className="form-control" placeholder="Search..."/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="nc-icon nc-zoom-split"></i>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <div className="dropdown">
                  <div className="dropdown_menu">
                    <a href={`/user/${userID}`} className="navbar-brand" type="button"><i className="fa fa-user" aria-hidden="true"></i> Profile</a>
                    </div>
                </div>
              </div>
            </div>
          </nav>
    </div>
    )
}

export default Navbar