import React from "react";
import {BrowserRouter as Router, Route,Switch, Link, NavLink} from "react-router-dom";
import Home from "../conponents/Home";
import Contact from "../conponents/Contact";
import Services from "../conponents/Services";
import Portfoilo from "../conponents/Portfoilo";
import About from "../conponents/About";
import ErrorPage from "../conponents/ErrorPage";
import AppleIcon from '@material-ui/icons/Apple';
 export default function Navbar(){
   return(
     <Router>
        
            <nav>
            <div className="logo">
              <AppleIcon className="logo-icon"/>
            <h1>iMac</h1>
    </div>

       <ul className="nav-list">
          <li><Link to="/">Цены</Link></li>
          <li><Link to="/Contact">Контакты</Link></li>
          <li><Link to="/Services">Отзывы</Link></li>
          <li><NavLink to="/About">Заказать звонок</NavLink></li>
        
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