import React from "react";
// import Arr from "../arr/Arr";
import "./cardStyle.css";
// let card = Arr[0];


function Card (props){
    let status = "";

    if (!props.card.sate){status="sleaping"}
    else {status = 'all good'}
    return (
            
        <div className="card">
            <div className='cardImg'>
                <img src="../../../favicon.ico" alt="" />
            </div>

           <div className='cardFields'>
            <span>{props.card.id}.NAME - {props.card.name}</span>
            <span>INFO - {props.card.info} </span>
            <span>STATE- {status}</span>

           </div>

        </div>
       
    )

}

export default Card;