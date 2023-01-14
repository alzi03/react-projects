// CDN is temporary
// import React from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))
const element = <h1 className="header">Hello, World!</h1>
root.render(element)
console.log(element)

/* same as
const header = document.createElement('h1')
header.textContent = 'Hello World'
header.classList.toggle('header')
document.querySelector('#root').appendChild(header)
*/

// component based programming
function MainContent(){
    return (
        <p>This is JSX</p>
    )
}
const main = ReactDOM.createRoot(document.querySelector('#main'))
main.render(
    <div>
        <MainContent /> 
    </div>
)


//navbar
const links = (
    <div>
        <a href="">Home</a><br></br>
        <a href="">Console</a>
    </div>
)
const navbar = ReactDOM.createRoot(document.querySelector('#navbar'))
navbar.render(links)
const nav = document.querySelector('#navbar')
nav.append(links)

