import React, {useState} from "react";
import Card from "./card";

const Dashboard = (props) => {
    return(
        <div className="container">
            <h1>Our Tours</h1>
            <div className="underline"></div>
            {props.tours.map((tour) => 
            <Card removeTour={props.removeTour} key={tour.id} {...tour} />)}
        </div>
    );
}

export default Dashboard;