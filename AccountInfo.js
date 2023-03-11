import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./AccountInfo.css";
import { useNavigate } from "react-router-dom";



function AccountInfo() {

    //Creates an instance of the current user - you can get their uid and name from this
    //user state 
    //name state 
    //email state 
    //navigate

    //on every change of the user or navigate variables, run this function and reload the component
    useEffect(() => {
        //sets current users name and email from firebase
        const fetchUserName = async () => {
            {/* write code here */}
        };
        if (!user) navigate("/"); //if no user send to hompage
        fetchUserName();
    }, [user, navigate]);

    return (
        <div className="accountInfo">
            <h3>Account Information</h3>
            <h3>{/* enter text */}</h3>
            <h3>{/* enter text */}</h3>
            <button className="button" /* onclick functionality */>
                Log Out
            </button>
        </div>
    );
}

export default UpdateAccount;
