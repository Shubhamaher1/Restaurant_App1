import React, { useEffect, useState } from "react";

const Footer = (props) => {
    const [ time , settime] =useState(20);
    useEffect((e)=>{
       const t=  new Date();
       settime(t.getFullYear()) 
    },[])
  return (
    <div id="footer">
      <div className="main_footer">
        <div className="f_div">
            <h4>Product</h4>
            <a href="#">Hotel Template</a>
            <a href="#">Hotel Feature</a>
            <a href="#">Hotel Builder</a>
            <a href="#">Location</a>

        </div>
        <div className="s_div">
            <h4>Design And Template</h4>

            <a href="#">Some Feature</a>
            <a href="#"> find Location</a>
            <a href="#">.....</a>

        </div>
        <div className="t_div">
            <h4>Comapany </h4>

            <a href="#">Name</a>
            <a href="# ">Grate</a>
            <a href="#">Data</a>
            <a href="#">Photo</a>
        </div>
        <div className="f_di">
            <h4>Support</h4>
            <a href="./Contact" onClick={(e)=>{
                e.preventDefault();
                props.changeTab("Contact")

            }}> Contact</a>
            <a href="./Home" onClick={(e)=>{
                e.preventDefault();
                props.changeTab("Home")
                
            }}>Home</a>
            <a href="./Gallery"onClick={(e)=>{
                e.preventDefault();
                props.changeTab("Gallery")
                
            }}>Photo</a>
            <a href="./menu"onClick={(e)=>{
                e.preventDefault();
                props.changeTab("Menu")
                
            }}>Menu</a>

        </div>
      </div>
      <hr/>
      <div className="comp_data">
            <h2>ShivShakti Hotel</h2>
            <h5>@ Copyright : {time}</h5>
      </div>
    </div>
  );
};
export default Footer;
