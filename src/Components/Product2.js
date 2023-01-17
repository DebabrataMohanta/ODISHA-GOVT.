import React from 'react'
import log1 from '../images/logoe1.png'
import log2 from '../images/logoe2.png'
import log3 from '../images/logo3.png'
import log4 from '../images/logoe5.png'
import log5 from '../images/logoe6.png'
import log6 from '../images/logoe7.png'
import log7 from '../images/logoe8.gif'

export default function Product2() {
  return (
    <>

<div className="scroll-container" style={{backgroundColor: "rgba(0, 0, 0, 0.354)", height:"85px", marginTop: "20px"}}>
 
  <span 
    style={{ height: "85px",  width: "190px", backgroundColor: "transparent"}}>
  
    <h5 className="waves-effect waves-light blue accent-1 btn center pulse"
    style={{padding: "2px", height: "40px", width: "150px"}}>Useful Links</h5>
  </span>
  <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
    <p>
      <a href="#/" className="home-page-links"> <img src={log1} style={{height: "80px",paddingLeft:"40px"}} alt=""/></a>

      <a href="#/" className="home-page-links"> <img src={log2} style={{height: "80px",paddingLeft:"40px"}} alt=""/></a>

      <a href="#/" className="home-page-links"> <img src={log3} style={{height: "80px",paddingLeft:"40px"}} alt=""/></a>

      <a href="#/" className="home-page-links"> <img src={log4} style={{height: "80px",paddingLeft:"40px"}} alt=""/></a>

      <a href="#/" className="home-page-links"> <img src={log5} style={{height: "80px",paddingLeft:"40px"}} alt=""/></a>

      <a href="#/" className="home-page-links"> <img src={log6} style={{height: "80px",paddingLeft:"40px"}} alt=""/></a>

      <a href="#/" className="home-page-links"> <img src={log7} style={{height: "80px",paddingLeft:"40px"}} alt=""/></a>
    </p>
  </marquee>
</div>
    </>
  )
}
