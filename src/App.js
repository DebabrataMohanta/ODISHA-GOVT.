import React from 'react';
import './App.css';
import Header from './Components/Header';

import Gallery from './Components/Gallery';
import Grids from './Components/Grids'
import Grids2 from './Components/Grids2';
import Product from './Components/Product';
import Product2 from './Components/Product2';
import Video from './Components/Video';
import Footer from './Components/Footer';




function App() {
  
  return (
    <>
    
    
    <Header/>
   
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

