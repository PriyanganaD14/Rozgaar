import React from "react";


import img1 from "../Assets/bricklayer.png";
import img2 from "../Assets/cook.png";
import img3 from "../Assets/maid.png"


const CarouselSection = ()=>{
  return (
    <div className="rvws">
    <div><h4 className="rvw">Success Stories</h4></div>
    <div id="carouselExampleIndicators" className="carousel slide slider" data-ride="carousel">
<ol className="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div className="carousel-inner main">
<div className="carousel-item active">
 <div className="card-deck">

<div className="card" id="setcrds">
<img src={img1} className="card-img-top rounded-circle" id="game" alt="..."/>
<div className="card-body">
   <h5 className="card-title titles">Aksahy Kumar,Kolkata</h5>
  <h5 className="card-title titles">Maths Tutor</h5>
  <p className="card-text sjana">This card has supporting text below as a natural lead-in to additional content.</p>
</div>
</div>

</div>
</div>
<div className="carousel-item">
   <div className="card-deck">

<div className="card" id="setcrds">
<img src={img2} className="card-img-top rounded-circle" id="game" alt="..."/>
<div className="card-body">
  <h5 className="card-title titles">Aksahy Kumar,Kolkata</h5>
  <h5 className="card-title titles">Maths Tutor</h5>
  <p className="card-text sjana">This card has supporting text below as a natural lead-in to additional content.</p>
</div>
</div>

</div>
</div>
<div className="carousel-item">
   <div className="card-deck">

<div className="card " id="setcrds">
<img src={img3} className="card-img-top rounded-circle" id="game" alt="..."/>
<div className="card-body">
  <h5 className="card-title titles">Aksahy Kumar,Kolkata</h5>
  <h5 className="card-title titles">Maths Tutor</h5>
  <p className="card-text sjana">This card has supporting text below as a natural lead-in to additional content.</p>
</div>
</div>

</div>
</div>
</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="sr-only">Next</span>
</a>
</div>
</div>
  );
};

export default CarouselSection;

