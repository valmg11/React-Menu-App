import "./App.css"
import MenuApp from "./components/MenuApp"
let data = {...} 
// (include the data array from above).
const App = () => {
  return (
    <div className="App">
    <MenuApp /> 
    {/* // example */}
    <MenuApp menudata = {data} /> 
    {/* // how it looks like in actual application */}
    </div>
  )
}
export default App