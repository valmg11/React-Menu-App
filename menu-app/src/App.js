// This should be included in the App.js file in order to render 
// it to the screen. Note we were providing the menuItem object 
// explicitly, so there isn't anything passed in here. The following 
// should replace the existing App.js contents, as symbols can only be defined once.
import "./App.css"
// import "App.css"
import MenuApp from "./components/MenuApp"
// let data = {...} (include the data array from above).
const App = () => {
  return (
    <div className="App">
    <MenuApp />
    {/* // example */}
    {/* <MenuApp menudata = {data} /> */}
    {/* // how it looks like in actual application */}
    </div>
  )
}
export default App