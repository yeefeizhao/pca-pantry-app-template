import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
    //creates an instance of the current user - you can get their uid and name from this
    //user state
    return (
        <div id="scanfcode" className="header">
            <nav className="navbar fixed-top navbar-expand-lg px-4 pt-2">
                <div className="container-fluid">
                    {/* Donamus Link 
                        id="title"
                        className="navbar-brand mb-0 ml-3 h1 pt-2"
                    */}
                        
                        
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Request Listings Link
                                className="nav-link active px-3 pt-3"
                aria-current="page"
                            */}                            
                        </li>
                    </ul>
                    <div className="form-inline px-3">
                        {/* 
                            Login Link
                            id="logbut"
                            className="btn my-2 my-sm-0 px-3"
                        */}
                    </div>
                </div>
                
            </nav>
        </div>
    );
}

export default Header;
