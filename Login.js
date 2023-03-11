import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "./firebase";
import "./Login.css";

function Login() {
    //initializes state variables
    //email state 
    //password state 
    //user state from firebase 
    //navigate 

    //runs on component load, if user is logged in, redirect to
    //account page
    useEffect(() => {
        //redirect to account if user is logged in
        //write code here
    });

    return (
        <div className="login">
            <h2>Login</h2>
            {/*Email address and password inputs*/}
            <div className="mb-2 mt-2">
                <input
                    className="form-control"
                    type="text"
                    value={email}
                    //onchange functionality
                    placeholder="Email Address"
                />
            </div>
            <div className="mb-2">
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    //onchange functionality
                    placeholder="Password"
                />
            </div>
            {/*Submit button and register/forgot links*/}
            <button
                //onClick functionality
                id="login_button"
                className="btn btn-outline-primary"
            >
                Log In
            </button>
            <div>
                Don't have an account? {" "}
                {/* 
                Register Link 
                className="link" 
                */} 
                {""}now.
            </div>
            <div>
                {/* 
                Forgot Password Link 
                className="link" 
                */} 
            </div>
        </div>
    );
}

export default Login;
