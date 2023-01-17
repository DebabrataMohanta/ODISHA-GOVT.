import React from 'react';
import './App.css';
import Gallery from './Components/Gallery';
import Grids from './Components/Grids'
import Grids2 from './Components/Grids2';
import Header from './Components/Header';
import Product from './Components/Product';
import Product2 from './Components/Product2';
import Video from './Components/Video';
import Footer from './Components/Footer';
import Slider from './Components/Slider';



function App() {
  
  return (
    <>
    
    <Header/>
    <Slider/>
    <Grids />
    <Grids2/>
    <Gallery/>
    <Video/>
    <Product/>
    <Product2/>
    <Footer/>
    
    </>
  );
}

export default App;

