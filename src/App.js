import { Component } from "react"
import "./App.css"
import HeaderComponent from "./components/HeaderComponent"
import SideBar from "./components/SideBar"
import Home from "./components/Home"

class App extends Component {
  render () { 
    return (
      <>
        <HeaderComponent/>
        <div className="side-bar-home-container">
          <SideBar/>
          <Home />
        </div>
      </>

    )
  }
}

export default App