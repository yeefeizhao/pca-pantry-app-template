import React, { useEffect, useState } from "react";
import FoodBank from "./components/FoodBank";
import NewPantry from "./components/NewPantry";
import AccountInfo from "./components/UpdateAccount";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Account.css";

function Account() {
    //banks state 

    //Creates an instance of the current user - you can get their uid and name from this
    //user state

    //runs on load and every time the user changes
    useEffect(() => {
        const getUserBanks = async () => {
            //write code here
        };
        if (loading) return;
        getUserBanks();
    }, [user, loading]);

    return (
        <div className="account">
            <div>
                <h2 className="title">Account</h2>
                <hr />
                <div>
                    {/* Account Info */}
                </div>
                <hr />
                <div>
                    <h3 className="sub-title">Your Locations</h3>
                    <br />
                    <hr />
                    {/* creates a new food bank for each bank from firebase */}
                    {/* write code here */}
                </div>
                <br></br>
                <div>
                    {/* New Pantry */}
                </div>
            </div>
        </div>
    );
}

export default Account;
