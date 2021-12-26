import React from "react";
import './style.css'
import Sidebar from "../../Components/SideBar/sidebar";
import Navbar from "../../Components/Header/navbar";
import Dashboard from "../Dashboard/dashboard";

const Home = ()=>{
    
    return(
        <div className="home">
                <Sidebar />
                <Navbar />
                <Dashboard />
        </div>
    )
}

export default Home