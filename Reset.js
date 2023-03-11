import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "./firebase";
import "./Reset.css";

function Reset() {
    //initializes email and navigate objects
    //email state
    //navigate

    //uses firebase's builtin reset password function on the email
    //and takes user back to login page
    const reset = (email) => {
        //reset password and send to login page
        //write code here
    };

    return (
        <div className="reset">
            <h2>Account Recovery</h2>
            {/*Form for entering email*/}
            <div class="mb-2 mt-2">
                <input
                    class="form-control"
                    type="email"
                    value={email}
                    //onchange functionality
                    placeholder="Email"
                />
            </div>
            {/*Button to call the reset function*/}
            <button 
                //onClick functionality
                id="login_button"
                class="btn btn-outline-primary"
            >
                Send Password Reset Email
            </button>
            {/* registration link */}
            <div>
                Don't have an account? {" "}
                {/* 
                Register Link 
                className="link" 
                */} 
                {" "} now.
            </div>
        </div>
    );
}

export default Reset;
