import React from "react"
import ReactDOM from "react-dom/client"
import star from "../assets/star.png"
import image1 from "../assets/image1.png"

function Card(props) {
  return(
    <div className="card">
      <img src={props.image} width="300px"/>
      <div className="rating">
        <span><img src={star} width="24px"/></span> {props.rating} ({props.reviews})
      </div>
      <div className="description">
        props.description
      </div>
      <div>
        <p><span className="price">From {props.price}</span> / person</p>
      </div>
    </div>
  )
}

function Cards() {
  return(
  <div className="cards">
    <Card image={image1} rating="5.0" reviews="6" description="Swimming Lessons"
    price="$136" />
  </div>
)}

export default Cards;

