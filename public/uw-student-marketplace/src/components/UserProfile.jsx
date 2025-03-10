import React, { useState,useEffect } from "react";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase-config";

function UserProfile(){
    const [displayName, setDisplayName] = useState("Guest");
    const [userEmail, setUserEmail] = useState("");
    const [createDate, setCreateDate] = useState("");

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
    return(
        <div className="user-profile-container">
            {/**Left side, Avatar + Name */}
            <div className="profile-left">
                <img src="https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,w_280,h_350,z_0.7/headshots_08793.jpg" className="profile-pic" />
                <h1 className="profile-name">{displayName}</h1>
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