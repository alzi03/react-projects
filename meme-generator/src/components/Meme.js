import React from "react";
import ReactDOM from "react-dom/client"
import memesData from "./memesData"


const Meme = () => {

  let randomUrl;
  let tText;
  let bText;

  const [meme, setMeme] = React.useState({
    topText: "",
    memeUrl: "",
    bottomText: ""
  })

  function getMeme() {
    let memesArray = memesData.data.memes

    randomUrl = memesArray[ Math.floor( Math.random() * memesArray.length )].url;

    setMeme(prevState => {
      return {...prevState, memeUrl: randomUrl }
    })
  }
  
  return (
    <main>
      <form className="form">
          <input 
            type="text" 
            className="form-input" 
            placeholder="toptext"/>
          <input 
            type="text" 
            className="form-input" 
            placeholder="bottomtext"/>
          <button type="button" className="form-button" onClick={getMeme}>New Image</button>
      </form>
      <div className="meme">
        <img src={meme.memeUrl} className="image" width="500px"/>
      </div>
    </main>
  );

}

export default Meme
