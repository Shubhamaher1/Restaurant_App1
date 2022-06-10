import React, { useState } from 'react';
import {Link , Outlet} from "react-router-dom";

const Head = (props) => {
  const [cl,setcl]= useState("Home");
  return (
      <div id='head'>
    <ul>
    <li onClick={(e)=>{
      e.preventDefault();
      setcl("Home")
      props.changeTab("Home");
    }}> <a href="./Home.jsx" 
    className={cl=="Home" ? "active":"null"}
    >Home</a></li>
    <li><a href="menu" onClick={(e)=>{
      e.preventDefault();
      setcl("menu")
      props.changeTab("Menu");
    }}className={cl=="menu" ? "active":"null"}>Menu</a></li>
    <li><a href="./Gallery.jsx"
    onClick={(e)=>{
      e.preventDefault();
      setcl("Gallery")
      props.changeTab("Gallery");
    }}
    className={cl=="Gallery" ? "active":"null"}
    > Gallery</a></li>
    <li> <a href="./Contact.jsx"
    onClick={(e)=>{
      e.preventDefault();
      setcl("Contact")
      props.changeTab("Contact");
    }}
    className={cl=="Contact" ? "active":"null"}
    > Contact</a></li>
    </ul>




      </div>
  )
}
export default Head;
