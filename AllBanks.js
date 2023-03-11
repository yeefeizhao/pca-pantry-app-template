import React, { useEffect, useState } from "react";
import FoodBank from "./components/FoodBank";
import { db } from "./firebase";
import { query, collection, getDocs } from "firebase/firestore";
import "./AllBanks.css";

function AllBanks() {
    //initializes state variables
    //bank state here

    //gets all banks from firebase
    const getBanks = async () => {
        //write code here
    };

    useEffect(() => {
        getBanks();
    }, []);

    return (
        <div className="listing">
            {/* loops through each bank and creates a bank component for it */}
            {/* write code here */}
        </div>
    );
}

export default AllBanks;
