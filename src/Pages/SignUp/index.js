import React, { useState } from 'react'
import Navbar from '../../Components/Header/navbar';
import Sidebar from '../../Components/Header/sidebar';
import './style.css'
const SignUp=()=> {
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [conpassword,confirmPassword] = useState("");
    const SignUp = ()=>{
        console.log(userId," ",password);
        setPassword("");
        setUserId("");
        if(password === conpassword){
            confirmPassword("");
        }
    }
    return (
        <div className='signIn'>
            <Sidebar />
            <Navbar />
            <div className='form-signin'> 
                <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
                <div className="form-floating">
                    <input 
                        onChange={e=>setUserId(e.target.value)}
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com" 
                        value={userId}
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input 
                        onChange={e=>setPassword(e.target.value)}
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password" 
                        value={password}
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input 
                        onChange={e=>setPassword(e.target.value)}
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Confirm Password" 
                    />
                    <label for="floatingPassword">Confirm Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" onClick={SignUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp