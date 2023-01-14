const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<h1>Hello, World!</h1>)
// root.render(<ul><li>Hello</li><li>World</li></ul>)

function MainContent(){
    return (
        <h1>React Learning</h1>
    )
}

const main = ReactDOM.createRoot(document.querySelector('#main'))
console.log(main)
main.render(
    <div>
        <MainContent /> 
    </div>
)