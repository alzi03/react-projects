import React from "react"
import ReactDOM from "react-dom/client"
import logo from './logo.svg';
import Information from "./components/Information"
import Description from "./components/Description"
import Footer from "./components/Footer"

const Box = () => {
  return(
  <div className="card">
    <Information />
    <Description />
    <Footer />
  </div>
)}

function App() {
  return (
    <Box />

  );
}

export default App;
