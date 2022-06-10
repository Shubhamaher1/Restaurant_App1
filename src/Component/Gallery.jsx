import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import  Head  from './Header';
import "../css/Gallery.css";

const applicationId = "11126060";
const apiKey = "858a4ce1e2110e5fdadb26a506864a64";
let index=0;
let ans=[];

const Gallery = () => {
  const[inputvalue, setValue]= useState("Hotel");
  useEffect(()=>{
    const baseURL =`https://api.edamam.com/search?q=${inputvalue}&app_id=${applicationId}&app_key=${apiKey}`;
    fetch(baseURL).then(data=>data.json()).then(res=>{
      console.log(res);
      ans=res.hits;
    })
  },[])
  return (
    <div>
        <section>
      <div className="container">
        <div className="header">
          <h1 className="logo">PhotoGallery</h1>
          <form>
            <input type="text" placeholder="Search image" value={inputvalue} onChange={
              (e)=>{
                e.preventDefault();
                setValue(e.target.value);
              }
            } />
            <ion-icon name="search"></ion-icon>
          </form>
        </div>
        <div className="gallery">
          {ans&& ans.map(data=>{
            return(
              <img src={data.recipe.image} alt="" />
            )
          })}
        </div>
        <a>
          <button className="load-more" data-img="curated">More</button>
        </a>
      </div>
    </section>
        
    </div>
  )
}
export default Gallery;
