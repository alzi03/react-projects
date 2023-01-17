import React from "react"
import ReactDOM from "react-dom/client"
import star from "../assets/star.png"

// Images
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"

function Card(props) {
  return(
    <div className="card">
      <img src={props.image} width="300px"/>
      <div className="rating">
        <img src={star} width="20px"/>{props.rating} {props.reviews && <span>({props.reviews})</span>}<small>{props.country}</small>
      </div>
      <div className="description">
        {props.description}
      </div>
      <div>
        <p><span className="price">From {props.price}</span> / person</p>
      </div>
    </div>
  )
}


const cardsInfo = [
  {
    image:image1,
    rating:"5.0",
    reviews:"6",
    country:"USA",
    description:"Swimming Lessons",
    price:"$136"
  },
  {
    image:image2,
    rating:"4.9",
    reviews:"12",
    country:"Guatemala",
    description:"Unforgettable Memories",
    price:"$250"
  },
  {
    rating:"4.9",
    description:"Unforgettable Memories",
    price:"$250"
  }
]

function Cards() {
  console.log(image1)
  const cards = cardsInfo.map(card => {
    return <Card image={card.image} rating={card.rating} reviews={card.reviews} country={card.country} description={card.description} price={card.price}/>
  })
  return(
    <div className="cards">
      {cards}
    </div>
  )}


export default Cards;

