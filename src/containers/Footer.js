import React from "react";
import Navbar from "./Navbar";
import Form from "../conponents/Form";



export default function Footer(){
  return(
    <footer>
     <div className="title">
       <h1>Остались вопросы?</h1> 
       <h2>Звоните: 7 (111) 111-11-11</h2>
     </div>
     <div className="footer-footer">
     
     <nav>
            <div className="logo">
             <img src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/Vector.png" alt=""/>
            <h1>iMac</h1>
    </div>

       <ul className="nav-list">
          <li><a href="/">Цены</a></li>
          <li><a href="/Contact">Контакты</a></li>
          <li><a href="/Services">Отзывы</a></li>
          
        
       </ul>
     </nav>
        

      <Form/>
      
     </div>
    </footer>
  )
}