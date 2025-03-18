/*
 * File: UserProflie.jsx
 * Description: This component renders the user profile page. 
 *              The user profile page displays the user's name, email, and profile picture and when account is created. 
 *               The user can upload a new profile picture by selecting an image file.
 *              The user's profile picture is stored in Firebase Storage.  
 *              The user profile page is only accessible to logged-in users.
 *              If the user is not logged in, the user profile page displays a message indicating that the user is a guest.
 *                                                                                           
 * States:
 * - displayName (string): The name of the user.
 * - userEmail (string): The email of the user.
 * - createDate (string): The date when the user account was created.
 * - profilePic (file): The profile picture of the user.
 * - uploading (boolean): A flag to indicate if the profile picture is being uploaded.
 * - previewURL (string): The preview URL of the profile picture.
          
 * Methods:
 * - handleFileChange(e): Handles the file change event and sets the profile picture.
 * - handleProfilePic(event): Handles the profile picture upload event and uploads the profile picture to Firebase Storage.
 * - UserProfile(): This function returns the user profile page component.
        
 * @author 
 * @version 1.0
 * @since 2025-02-25
 */
import React, { useState,useEffect } from "react";
import { getAuth,onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../Firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { use } from "react";
import './UserProfile.css';

function UserProfile(){
    const [displayName, setDisplayName] = useState("Guest");
    const [userEmail, setUserEmail] = useState("");
    const [createDate, setCreateDate] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [previewURL, setPreviewURL] = useState(null);
    useEffect(() => {
        const auth = getAuth();
        const userSignInState = onAuthStateChanged(auth, async(user)=>{
        if(user){
            const docRef = doc(db, 'users', user.uid)
            const userDoc = await getDoc (docRef);
            if(userDoc.exists()){
            const data = userDoc.data();
            setDisplayName(data.name||user.email);
            setUserEmail(user.email);
            setCreateDate(user.metadata.creationTime);
            }else{
            setDisplayName('Guest');
            }
        }
        });
        return userSignInState;
    },[]);

const handleFileChange = async(e)=>{
    if(e.target.files && e.target.files[0]){
        const file = e.target.files[0];
        setProfilePic(file);
        const url = URL.createObjectURL(file);
        setPreviewURL(url);
        
    }
    
}

const handleProfilePic = async(event)=>{
    event.preventDefault();

    // form validation
    if (!profilePic) {
        alert("Please upload a product image");
        return;
    }

    setUploading(true);
    const auth = getAuth();
    const user = auth.currentUser;


    if (!user) {
        alert("No user is logged in.");
        setUploading(false);
        return;
    }

    const fileRef = ref(
        storage,`profilePictures/${user.uid}/${Date.now()}-${profilePic.name}`
    );

    try{
        const uploadTask = uploadBytesResumable(fileRef,profilePic);
        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                const progress = (snapshot.bytesTransferred/ snapshot.totalBytes) *100;
                console.log(`upload is ${progress}% done`);
            },
            (error) => {
                console.error("Uploade error", error);
                alert("Error uploading profile picture");
                setUploading(false);
            },
            async() =>{
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log("Download URL: ", downloadURL);

                await updateProfile(user,{photoURL: downloadURL});
                alert("User profile updated successfully");
                setUploading(false);
                setProfilePic(null);
            }
            
        );
    }catch(error){
        console.error("Error during upload:", error);
        alert("Upload failed: " + error.message);
        setUploading(false);        
    }
    
};



    return(
        <div className="user-profile-container">
            {/**Left side, Avatar + Name */}
            <div className="profile-left">
                <img src={previewURL} className="profile-pic" alt="profile"/>
                <h1 className="profile-name">{displayName}</h1>
                <form onSubmit={handleProfilePic}>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    />
                    <button type="submit" disabled={uploading}>
                    {uploading ? "Uploading..." : "Update Profile Picture"}
                    </button>
                </form>
            </div>
            <div className="profile-right">
                <div className="contact-info">
                    <span>Member since: {createDate}</span>
                    <div className="contact-info">
                        <h2>Contact Information:</h2>
                        <span>Email: {userEmail}</span>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}
export default UserProfile;