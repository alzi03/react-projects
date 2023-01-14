import React from "react"
import ReactDOM from "react-dom/client"
import github from "../assets/github.png"


const Footer = () => {
  return(
    <div className="footer">
      <a href="https://github.com/alzi03"><img src={github} width="30px" /></a>
      <br/>
      <br/>
    </div>
  )
}
export default Footer
