import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Banner = () => {
  const [value, setValue] = useState(0);

  const onchange = (v) => {
    setValue(v);
    console.log('VALUE:' + v);
  };

  const productSlides = [
    {
      img:"https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      alt:"product",
      tag:"Product 1"
    },
    {
      img:"https://images.pexels.com/photos/4164651/pexels-photo-4164651.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      alt:"product",
      tag:"Product 2"
    },
    {
      img:"https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      alt:"product",
      tag:"Product 3"
    },
  ];
  return (
    <div className={classes.wrap}>
      <Carousel autoPlay infiniteLoop dynamicHeight={false} showThumbs={false}>
        {productSlides.map((prd, i)=>{
          return(
            <div key={i}>
            <img src={prd.img} alt={prd.alt}/>
        <p className="legend">{prd.tag}</p>
          </div>
          )
          

        })}
      </Carousel>
    </div>
  );
};

export default Banner;
