import React from "react";
import Card from "./card";

const Dashboard = () => {
    return(
        <div className="container">
            <h1>Our Tours</h1>
            <div className="underline"></div>
            <Card />
            <Card />
        </div>
    );
}

export default Dashboard;