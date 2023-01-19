import React from 'react'
import ReactDOM from 'react-dom/client'

/* Images */
import mapIcon from "../assets/redmapicon.png"
import image1 from "../assets/image1.webp"
import image2 from "../assets/image2.webp"

function Entry(props){
  return(
  <div className="entry">
    <img src={props.image} alt={props.imgDescr} width="400px" className="locationImage"/>
    
    <div className="right">

      <div className="location">
        <div>
          <img src={mapIcon} />
        </div>
        <>{props.country}</>
        <a href={`https://google.com/maps?q=${props.address}`} className="gmaps">View on Google Maps </a>
      </div>

      <h1 className="vacationSpot">{props.vacationSpot}</h1>

      <div className="timePeriod">
        <h6>{props.tripStart} - {props.tripEnd}</h6>
      </div>

      <>
        {props.description}
      </>

    </div>
  
  </div>
)}

const trips = [
  {
    image:image1,
    imgDescr:"mountains",
    country:"JAPAN",
    address:'Kitayama, Fujinomiya, Shizuoka 418-0112, Japan',
    vacationSpot:"Mount Fuji",
    tripStart:"12 Jan, 2021",
    tripEnd:"24 Jan, 2021",
    description:"Japan was nice. I saw some cool mountains and all in all it was a very pleasant experience. Food was 10/10, night-life was 10/10. Would go again"
  },
  {
    image:image2,
    imgDescr:"sydney opera",
    country:"AUSTRALIA",
    address:"Bennelong Point, Sydney NSW 2000, Australia",
    vacationSpot:"Sydney Opera",
    tripStart:"21 Jun, 2021",
    tripEnd:"29 Jun, 2021",
    description:"8/10 Vacation. The opera itself and the experience there was great, would definitely love to go again. However, I had a hard time actually getting there. I got lost."
  }
]

function Entries() {
  const entries = trips.map(trip => {
    return( 
    <Entry
      image={trip.image}
      imgDescr={trip.imgDescr}
      country={trip.country}
      address={trip.address}
      vacationSpot={trip.vacationSpot}
      tripStart={trip.tripStart}
      tripEnd={trip.tripEnd}
      description={trip.description}/>
)})


  return (
    <div className="entries">
      {entries}
    </div>
  )
}


export default Entries;