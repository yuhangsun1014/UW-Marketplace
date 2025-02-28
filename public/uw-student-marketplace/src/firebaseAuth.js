/**
 * File: firebaseAuth.js
 * Description: This file contains functions that handle user registration
 *              and login using Firebase Authentication and Firestore.
 *
 * Exports:
 *  - registerUsers: Creates a new user in Firebase Authentication, stores additional
 *                   user data in Firestore, then returns the user credential.
 *  - loginUser:     Logs in an existing user using Firebase Authentication,
 *                   then returns the user credential.
 *
 * @author William Sun
 * @version 1.0
 * @since   2025-02-25
 */

import {auth, db} from "./Firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

/**
 * Registers a new user in Firebase Authentication and stores
 * their details in Firestore.
 *
 * @async
 * @function registerUsers
 * @param {string} email - The user's email address.
 * @param {string} password - The user's chosen password.
 * @param {string} username - The user's display name or chosen username.
 * @returns {Promise<import("firebase/auth").UserCredential>}
 *          A promise that resolves to the user credential object,
 *          which contains data about the newly created user.
 * @throws {Error} If the user could not be created or if Firestore update fails.
 */
export const registerUsers = async(email, password, username)=>{
    
    let userCredential;
    try{
        userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
        console.log("userCredential: " + userCredential);
        const user = userCredential.user;

        await setDoc(doc(db,"users",user.uid),{
            userid:user.uid,
            name:username,
            email:user.email,
            createdAt: serverTimestamp(),
        })
        
        console.log(`${username} saved to firestore`);

    }catch(error){
        console.error(`Error saving: ${username}`);
    }
    return userCredential;
}

/**
 * Logs in an existing user using Firebase Authentication.
 *
 * @async
 * @function loginUser
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<import("firebase/auth").User>}
 *          A promise that resolves to the user object upon successful login.
 * @throws {Error} If the login fails (e.g., wrong password or nonexistent user).
 */
export const loginUser = async(email, password) =>{
    try{    
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(email, password)
        console.log(`user login: ${userCredential.user.email}`);
        return userCredential.user;
    }catch(error){
        console.error("Login error");
        throw error;
    }
}