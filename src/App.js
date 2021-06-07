import React from "react";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import Productdetail from "./components/Productdetail";

const App = ()=>{

    return(
        <>

        <Router>

        <NavBar/>
       
        <Switch>
            
        <Route exact path="/" component={Home}  />
        <Route path="/about" component={About}  />
        <Route path="/contact" component={Contact}/>
        <Route path="/products/:product" component={Productdetail}  />
        
        </Switch>
        </Router>


       

        </>
    )
}

export default App 

 