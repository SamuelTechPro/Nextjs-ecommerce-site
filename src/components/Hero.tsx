
"use client"




import React from 'react';
import Slider from "react-slick";
import Slide from "@/components/Slide"



const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
    }

    const slideData = [
        {
            id: 0,
            img: "/banner6.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"
        },
        {
            id: 1,
            img: "/banner4.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15"
        },
        {
            id: 2,
            img: "/banner5.jpg",
            title: "Sale offer",
            mainTitle: "MEN FASHION SUMMER SALE",
            price: "$30"
        },
    ]


  return (
    <div>
       <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                 />
            ))}

        </Slider>
       </div>
    </div>
  )
}

export default Hero
