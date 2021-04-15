import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
} from "reactstrap";

import { Button, Grid } from '@material-ui/core';
import Success from "./Carousel/Success";

import img1 from "./Assets/bricklayer.png";
import img2 from "./Assets/cook.png";
import img3 from "./Assets/maid.png"
import img4 from "./Assets/taxiDriver.png"

const items = [
  {
    img: img1,
    title: "Brick Layer",
    para: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img: img2,
    title: "Cook",
    para: "Some quick example text to build on the card title and make up the bulk of the card's content. Cook"
  },
  {
    img: img3,
    title: "Maid",
    para: "Some quick example text to build on the card title and make up the bulk of the card's content. Maid"
  },
  {
    img: img4,
    title: "Taxi Driver",
    para: "Some quick example text to build on the card title and make up the bulk of the card's content. Taxi Driver"
  }
];

const CarouselSection = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.img}
      >
        <Success img={item.img} para={item.para} title={item.title} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <p className="mytext">Success Stories</p>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={previous}>prev</Button>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={next}>next</Button>
        </Grid>
      </Grid>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
      </Carousel>
    </div>
  );
};

export default CarouselSection;