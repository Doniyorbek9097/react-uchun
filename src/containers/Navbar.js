import React from "react";
import {BrowserRouter as Router, Route,Switch, Link, NavLink} from "react-router-dom";
import Home from "../conponents/Home";
import Contact from "../conponents/Contact";
import Services from "../conponents/Services";
import Portfoilo from "../conponents/Portfoilo";
import About from "../conponents/About";
import ErrorPage from "../conponents/ErrorPage";
import Bars from "../conponents/Bars";

 export default function Navbar(){
   return(
     <Router>
        
            <nav>
            <div className="logo">
             <img src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/Vector.png" alt=""/>
            <h1>iMac</h1>
    </div>

       <ul className="nav-list">
          <li><Link to="/">Цены</Link></li>
          <li><Link to="/Contact">Контакты</Link></li>
          <li><Link to="/Services">Отзывы</Link></li>
          <li><a href="tel:+998934073322" className="active">Заказать звонок</a></li>
        
       </ul>

      <Bars/>

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