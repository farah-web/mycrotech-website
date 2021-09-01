
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import './App.css'


function App() {
  return (
    <>
    <Navbar/>
    
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/service" component={Service}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Redirect to="/"></Redirect>
    </Switch>
    </>
  );
}

export default App;
