import React from "react";
import {BrowserRouter as Router, Route,Switch, Link} from "react-router-dom";
import Home from "../conponents/Home";
import Contact from "../conponents/Contact";
import Services from "../conponents/Services";
import Portfoilo from "../conponents/Portfoilo";
import About from "../conponents/About";
import ErrorPage from "../conponents/ErrorPage";
 export default function Navbar(){
   return(
     <Router>
        
            <nav>
            <div className="logo">
            <h1>iMac</h1>
    </div>

       <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Portfoilo">Portfoilo</Link></li>
          <li><Link to="/About">About</Link></li>
       </ul>
     </nav>

      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      
      <Route exact path="/Contact">
        <Contact/>
      </Route>

      <Route exact path="/Services">
        <Services/>
      </Route>

      <Route exact path="/Portfoilo">
        <Portfoilo/>
      </Route>

      <Route exact path="/About">
        <About/>
      </Route>

      <Route>
        <ErrorPage/>
        </Route>

        </Switch>
       </Router>
   );

   

 }