
import React from 'react'
import ProductCard from "@/components/ProductCard"


const productData =  [
    {
        img: "/jacket.png",
        title: "Jacket",
        desc: "Trekking & Running Shoe - Black",
        rating: 3,
        price: "45.00"
    },
    {
        img: "/skirt.png",
        title: "Skirt",
        desc: "Trekking & Running Shoe - Black",
        rating: 4,
        price: "55.00"
    },
    {
        img: "/partyshoe.png",
        title: "Skirt2",
        desc: "Trekking & Running Shoe - Black",
        rating: 1,
        price: "25.00"
    },
    {
        img: "/boot.png",
        title: "Sports",
        desc: "Trekking & Running Shoe - Black",
        rating: 3,
        price: "58.00"
    },
    {
        img: "/shirt.png",
        title: "Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 5,
        price: "45.00"
    },
    {
        img: "/watch.png",
        title: "Watches",
        desc: "Smart Watches Vital Plus",
        rating: 2,
        price: "100.00"
    },
    {
        img: "/watch2.png",
        title: "Watch",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "120.00"
    },
    {
        img: "/shirt2.png",
        title: "Shirt",
        desc: "Elegance shirt with style",
        rating: 4,
        price: "120.00"
    },
    
]




const NewProduct = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>
                New products
            </h2>
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-y-10 '>
               {productData.map((item, index) => (
                <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                />
               ))} 
            </div>
        </div>

    </div>
  )
}

export default NewProduct








