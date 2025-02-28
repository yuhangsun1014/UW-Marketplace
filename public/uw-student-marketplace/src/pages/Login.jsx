/**
 * File: Login.jsx
 * Description: This component renders a login form that allows users to
 *              log into their account using email and password credentials.
 *              On successful login, the user is welcomed by an alert.
 *
 * States:
 * - email (string): The email provided by the user for logging in.
 * - password (string): The password provided by the user.
 * - error (string): Holds any error messages encountered during login.
 *
 * Methods:
 * - handleLogin(e): Submits the form data to Firebase auth for sign-in
 *                   and sets any errors that might occur.
 *
 * @author William Sun
 * @version 1.0
 * @since 2025-02-25
 */

import React, {useState} from "react";
import { loginUser } from "../firebaseAuth";

import "./Login.css"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async(e) =>{
        e.preventDefault();
        setError("");
        try{
        const user = await loginUser(email, password);
            alert(`Login Successful: Welcome back ${user.email}`);
        }catch (err){
            setError(err.message);
        }
    };
    return(
        <div className = "login-container">
            <h2>Login</h2>
            {error && <p className = "error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="email "
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
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