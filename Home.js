import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    

    return (
        <div className="home">
            <div className="heroImage">
              <img className="landing_image" alt="landing" />
                <h1>
                    Making Donation Centers More Accessible
                </h1>
            </div>
            {/*Description on homepage of website*/}
            <div className="main">
                <div id="desc" className="card border-primary mb-3">
                    <div className="card card-body text-primary">
                        {/*Description about Project Donamus Goal*/}
                        <h4 className="card-title home-title">
                            Donamus's Goal
                        </h4>
                        <p className="card-text">
                            Donamus is the Latin word used for “We Give.” Our
                            goal is to make donations more widespread and
                            accessible by centralizing donation requests into
                            one, easy-to-read website. Whether it would be a
                            food bank, homeless shelter, or soup kitchen,
                            donations are important to help lower income
                            families and individuals. Donamus helps website
                            visitors identify where their extra supplies can go
                            in order to help better their community. Website
                            visitors will be able to view the listings that
                            administrators of organizations make.
                        </p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row ml-3">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                            {/*Description about Request Listings Page*/}                               
                                <h5 className="card-title">Request Listings</h5>
                                <p className="card-text">
                                    The Request Listings page helps to organize
                                    the donation requests from locations.
                                    Website visitors can search materials needed
                                    by different sites and gather information
                                    about the location including the address of
                                    the location, contact information, and
                                    quantity of the requested items.
                                </p>
                                {/*Link to Listing page*/}
                                <Link
                                    to="/banks"
                                    className="btn btn-primary home-button"
                                >
                                    Go to Request Listings
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                {/*Description about Logins and Accounts */}
                                <h5 className="card-title">
                                    Login and Account
                                </h5>
                                <p className="card-text">
                                    The Login and Account page is where
                                    administrators of certain organizations can
                                    post their donation requests on the webpage.
                                    A website visitor does not need to sign up
                                    for an account to view locations.
                                </p>
                                {/*Link to Login/Account page*/}
                                <Link
                                    to="/login"
                                    className="btn btn-primary home-button"
                                >
                                    Go to Login and Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
