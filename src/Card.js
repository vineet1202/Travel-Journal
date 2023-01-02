import React from "react"

export default function Card(props){
    return (
        <div>
        <div className="card-container">
            <img src={props.img} className="card-img" />
            <div className="card-info">
                <p className="card-cName">📍{props.countryName}</p>
                <a href={props.link}>View on google maps</a>
                <p className="card-location">{props.locationVisited}</p>
                <p className="card-date">{props.date}</p>
                <p className="card-desc">{props.desc}</p>
            </div>
        </div>
        <hr className="line"></hr>
        </div>
    )
}