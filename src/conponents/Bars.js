import React from "react";

export default function Bars(){

  return(
    <div className="bars" onClick = {barsHendler}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  )

function barsHendler(){
  const navList = document.querySelector(".nav-list");
    if(navList.style.left==="-100%"){
      navList.style.left="0%";
      document.querySelector(".bars").classList.add("bars-active");
    }else{
      navList.style.left="-100%";
      document.querySelector(".bars").classList.remove("bars-active");
    }
}


}