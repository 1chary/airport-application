import { Component } from "react"
import "./App.css"
import HeaderComponent from "./components/HeaderComponent"
import SideBar from "./components/SideBar"

class App extends Component {
  render () {
    return (
      <>
        <HeaderComponent/>
        <SideBar/>
      </>

    )
  }
}

export default App