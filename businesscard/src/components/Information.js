import React from "react"
import ReactDOM from "react-dom/client"
import picture from "../assets/headshot.jpg"
import phone from "../assets/phone.png"
import linkedin from "../assets/linkedin.png"

const Information = () => {
  return (
    <div className="information">
      <img src={picture} width="350px" className="headshot"/>
      <div className="data">
        <div className="name">Alam Zishan</div>
        <div className="job">Software Engineer</div>
        <div className="twolinks">
          <a href="" className="phonenumber"><img src={phone}/><span>646-944-5085</span></a>
          <a href="https://www.linkedin.com/in/az03/" className="linkedin"><img src={linkedin}/><span>Linkedin</span></a>
        </div>
      </div>
    </div>

  )
}

export default Information



