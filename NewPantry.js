import React, { useEffect, useState } from "react";
import { addNewPantry } from "../firebase";
import "./NewPantry.css";

function NewPantry() {
    // name state 
    // quantity state 
    // foodList state 
    // add1 state 
    // city state 
    // state state 
    // zip state 
    // location state 

    //runs every time any of the address components change
    //useEffect for location

    //this is called when a user submits the form below
    //handle submit function

    return (
        <div className="pantry">
            <h3>Add a Location</h3>
            {/*Form for adding a location*/}
            <input
                type="text"
                className="textbox"
                value={name}
                //onchange functionality
                placeholder="Location Name"
            />
            <input
                type="text"
                className="textbox"
                value={add1}
                //onchange functionality
                placeholder="Address"
            />
            <div className="line2">
                <input
                    type="text"
                    className="textbox"
                    value={city}
                    //onchange functionality
                    placeholder="City"
                />
                <input
                    type="text"
                    className="textbox"
                    value={state}
                    //onchange functionality
                    placeholder="State"
                />
                <input
                    type="text"
                    className="textbox"
                    value={zip}
                    //onchange functionality
                    placeholder="Zip Code"
                />
            </div>
            <input
                type="text"
                className="textbox"
                value={foodList}
                //onchange functionality
                placeholder="Requested Items (separate with commas | max of 3 items)"
            />
            <input
                type="text"
                className="textbox"
                value={quantity}
                //onchange functionality
                placeholder="Quantity (separate with commas with above order)"
            />

            {/* this button is disabled if at least one of the fields is not filled out */}
            <button
                className="button"
                type="submit"
                /* onclick functionality */
                disabled={
                    !name ||
                    !add1 ||
                    !city ||
                    !state ||
                    !zip ||
                    !quantity ||
                    !foodList
                }
            >
                Add Pantry
            </button>
        </div>
    );
}

export default NewPantry;
