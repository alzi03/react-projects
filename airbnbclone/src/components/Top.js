import React from 'react'
import ReactDOM from 'react-dom/client'
import airbnb from "../assets/airbnb.png"
import topimage1 from "../assets/topimage1.jpeg"
import topimage2 from "../assets/topimage2.webp"
import topimage3 from "../assets/topimage3.webp"

const Top = () => {
  return(
    <div>
      <div className="header">
        <img src={airbnb} width="200px"/>
      </div>
      <div className="images">
        <div className="image">
          <img src={topimage1} className="topimage"/>
          <h3>Explore exciting new horizons</h3>
        </div>
        <div className="image">
          <img src={topimage2} className="topimage"/>
          <h3>Great for team building</h3>
        </div>
        <div className="image">
          <img src={topimage3} className="topimage"/>
          <h3>Luxury living</h3>
        </div>
      </div>
    </div>
  )
}

export default Top