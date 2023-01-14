/* import Header from "Header"
console.log(Header)
*/


const Header = () => {
    return (
    <header>
        <nav className="header">
            <img src="./assets/react-logo.svg" width="80px"/>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>

)}


const Footer = () => {
    return(
    <footer className="footer">
        <small>2023 alzi03 | All Rights Reserved.</small>
    </footer>
)}
const Content = () => {
    return(
        <div>
            <h1>React Facts</h1>
            <ol>
                <li>React is not a framework</li>
                <li>Virtual DOM is faster than real DOM</li>
                <li>React has over 100k stars on Github</li>
                <li>React is one of the most marketable developer skills</li>
            </ol>
        </div>
    )
}

const Page = () =>{
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}



const body = ReactDOM.createRoot(document.querySelector('#body'))
body.render(
    <Page />
)
