const body = ReactDOM.createRoot(document.querySelector('#body'))

const funfacts = (
    <div>
        <img src="./assets/react-logo.svg" width="80px"></img>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintined by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

    </div>
)

body.render(funfacts)