import React, { Component } from "react"
import NavBar from './components/NavBar';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="body-wrapper">
        <NavBar/>
        <footer className="footer"></footer>
      </div>
    )
  }
}