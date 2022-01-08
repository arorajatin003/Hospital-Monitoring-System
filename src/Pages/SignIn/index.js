import React, { useState } from 'react'
import Navbar from '../../Components/Header/navbar';
import Sidebar from '../../Components/Header/sidebar';
import './style.css'
const SignIn=()=> {
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    const signIn = ()=>{
        console.log(userId," ",password);
        setPassword("");
        setUserId("");
    }
    return (
        <div className='signIn'>
            <Sidebar />
            <Navbar />
            <div className='form-signin'> 
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
                <button className="w-100 btn btn-lg btn-primary" onClick={signIn}>Sign in</button>
            </div>
        </div>
    )
}

export default SignIn
