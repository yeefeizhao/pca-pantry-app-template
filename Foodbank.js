import React from "react";

function FoodBank() {

    return (
        <div className="foodbank container">
            <div className="card-group">
                <div className="card border-primary mb-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            {/* enter text */}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {/* enter text*/}
                        </h6>
                        <p className="card-text">Made By: {/* enter text*/}</p>
                    </div>
                </div>

                <div className="card border-primary mb-3">
                    <p className="columnTitle">Needed Materials</p>
                    <ul className="list-group list-group-flush">                
                        <div>
                            {/* list items */}
                        </div>
                    </ul>
                </div>

                <div className="card border-primary mb-3">
                    <p className="columnTitle">Quantity</p>
                    <ul className="list-group list-group-flush">
                        <div>
                            {/* list items */}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FoodBank;
