import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Menu from './Component/menu';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';
import Head from './Component/Header';
import Footer from './Component/Footer';
import { useState } from 'react';
// const http = require("http");




function App() {
  const[tab , settab]= useState("Home");
  function changeTab(data){
    settab(data);

  }
  return (

   
<>
<Head  changeTab={changeTab}/>
<hr/>
{tab=="Home" ? <Home/>:null}
{tab=="Menu" ? <Menu/>:null}
{tab=="Gallery" ? <Gallery/>: null}
{tab=="Contact" ? <Contact/>: null}


<Footer changeTab={changeTab}/>

</>
      
      
      
      
  
  );  
}

export default App;
    