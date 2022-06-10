import React, { useState , useEffect} from 'react'

import "../css/Menu.css";

const applicationId = "11126060";
const apiKey = "858a4ce1e2110e5fdadb26a506864a64";
var re=[];

const Menu = () => {
  const [serchQuire, setserchQuire]=useState("Chicken");
  useEffect(()=>{
    const baseURL = `https://api.edamam.com/search?q=${serchQuire}&app_id=${applicationId}&app_key=${apiKey}`;
  
    fetch(baseURL).then(res=>res.json()).then(resultsa=>{
      re=resultsa.hits;
      console.log(re);
    })
  
 
 
  // const data =respons.json();
  //  re=data.hits;
  },[re])
  return (
    <div>

<section>
      <div className="contaner">
        <h1 className="brand">
          Menu Search 
        </h1>
        <form action="">
          <input type="text" placeholder="Search Your Recipies...." value={serchQuire}  onChange={(e)=>{
            e.preventDefault();
            setserchQuire(e.target.value);
          }}/>
          <ion-icon name="search" id="search-btn1"></ion-icon>
        </form>

        <div className="search-result">
          {re&& 
          re.map(date=>{
            console.log(date)
            return(
               <div class="itms">
              <img src={date.recipe.image} alt=""></img>
              <div class="flex-contsiner">
                  <h1 class="title">{date.recipe.label}</h1>
                  <a class="view-btn" href="${
                    date.recipe.url
                  }" target="_blank">View Recipe</a>
              </div>
              <p class="itm-data">caliri:{date.recipe.calories.toFixed(
                2
              )}</p>
              <p class="itm-data">Diet Label:{date.recipe.dietLabels}</p>
              <p class="itm-data">Helth lable:{
                date.recipe.healthLabels
              }</p>
          </div>
           );
          })
        }
        </div>
      </div>
    </section>
     
    </div>
  )
}
export default Menu;
