import React from "react";


function Card(props) {
    return(
        <div className="card" onClick={props.selectCard}>
            <div className="card--image">
                <img src={props.data.url} alt="img not found" />
            </div>
            <div className="card--name">
                <div>{props.data.name}</div>
            </div>
        </div>
    )
}


export {Card}