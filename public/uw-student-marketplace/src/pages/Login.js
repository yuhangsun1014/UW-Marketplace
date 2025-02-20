import React, {useState} from "react";
import {auth} from "../Firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handelLogin = async(e) =>{
        e.preventDefault();
        useState.setError("");
        try{
        const userCrential = await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        }catch (err){
            setError(err.message);
        }
    };
    return(
        <div className = "login-container">
            <h2>Login</h2>
            {error && <p className = "error-message">{error}</p>}
            <form onSubmit={handelLogin}>
                <input
                    type="email"
                    placeholder="email "
                    value = {email}
                    onChange={(e) => setEmail(e.target)}
                    required
                />
                <input type="passwprd"
                    placeholder="password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type = "submit">Login</button>
            </form>
        </div>
    );

}
export default Login;