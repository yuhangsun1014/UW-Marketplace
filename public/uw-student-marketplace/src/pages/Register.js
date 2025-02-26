/**
 * File: Register.js
 * Description: A React functional component that renders a registration
 *              form allowing users to create an account. Includes field
 *              validation and calls the Firebase register function.
 *
 * States:
 * - email:     Stores the email input (string).
 * - password:  Stores the password input (string).
 * - username:  Stores the username input (string).
 * - message:   Displays general feedback messages (string).
 * - error:     Displays error messages, particularly during registration (string).
 *
 * Internal Methods:
 * - handleRegister(e): Validates user inputs, calls the Firebase `registerUsers`
 *                      function, and handles success or error conditions.
 *
 * @author  William Sun
 * @version 1.0
 * @since   2025-02-25
 */

import React, {useState} from "react";
import { registerUsers } from "../firebaseAuth";
import "./Login.css"

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async(e) =>{
        
        e.preventDefault();
        
        setError("");
        if(!email|!password|!username){
            setMessage("Please fill in all fields");
            return;
        }
        try{
        const userCrential = await registerUsers(email, password,username);

        const user = userCrential.user;
            alert(`Register Successful: Welcome ${user.username}`);
            return userCrential;
        }catch (error){
            setError(error.message);
        }
        
    };
    return(
        <div className = "register-container">
            <h2>Register Account</h2>
            {error && <p className = "error-message">{error}</p>}
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
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
                <button type = "submit">Register</button>
            </form>
        </div>
    );

}
export default Register;