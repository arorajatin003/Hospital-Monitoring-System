import React from "react";
import './style.css'
import Sidebar from "../../Components/Header/sidebar";
import Navbar from "../../Components/Header/navbar";

const Home = ()=>{
    return(
<div className="home">
        <Sidebar />
        <Navbar />
</div>
    )
}

export default Home