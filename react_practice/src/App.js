import React from "react";
import { ReactDOM } from "react";
import { useState } from "react"

import { encryption } from "./encryption";

export default function Login({}) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  const [status, setStatus] = useState(false)

  const [logged, setLogged] = useState(false)

  if (logged){
    return(
      <h1>
        Welcome! Nice to see you {user}!
      </h1>
    )
  }


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      if(user===encryption.username && password===encryption.password){
        setStatus(true)
      }
      else{
        alert('Incorrect!')
      }
    }, 300)
  }

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    console.log(code)
    setTimeout(() => {
      if(code===encryption['security code']){
        setLogged(true)
      }
      else{
        alert('Incorrect!')
        setCode('')
        setStatus(false)
      }
    }, 300)
  }


  return(
    <div>
      <form className="form" onSubmit={handleLoginSubmit}>
        <label for="user">Username:</label>
        <input type="text" name="user" onChange={(e) => setUser(e.target.value)}></input><br/>

        <label for="pass">Password:</label>
        <input type="text" name="pass" onChange={(e) => setPassword(e.target.value)}></input><br/><br/>
        <button disabled={user === '' | password === ''}>Submit</button>
      </form>
      <br/><br/>
      
      {status && 
      <form onSubmit={handleCodeSubmit}>
        <label for="pass">Code:</label>
        <input type="text" name="pass" onChange={(e) => setCode(e.target.value)}></input><br/>

        <button disabled={code === ''}>Submit</button>
      </form>
      }


    </div>
    )}


function Form({}) {
  const [status, setStatus] = useState('empty')

  if (status===''){
    setStatus('empty')
  }

  const ans = 'Lima'


  const newChange = (e) => {
    setStatus(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault();
    
    status === 'Lima' ? setStatus('success') : setStatus('error')
  }


  
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleForm}>
        <textarea disabled={
          status === 'submitting'
        } onChange={newChange}/>
        <br />
        <button disabled={
          status === 'empty' ||
          status === 'submitting'
        }>
          Submit
        </button>
        {status === 'error' &&
          <p className="Error">
            Good guess but a wrong answer. Try again!
          </p>
        }
        {status === 'success' &&
          <p className="Success">
            That's right!
          </p>}
        
      </form>
      </>
  );
}



const Toolbar = ({ onClick, children}) => {
  return(
    <div>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  )
}
