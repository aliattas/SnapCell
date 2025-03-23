import React from 'react'
import Image from 'next/image'
import ListCardsType from './ListCardsType';
import { ShoppingCart } from 'lucide-react';


const ProductTitle = ({ img, title, type, text, price }) => {
    return (
      
        <>
            <div className="flex  flex-col sm:flex-row mb-10 mt-14 container justify-center items-center px-20 gap-7">

                <Image
                    src={img || "/placeholder.jpg"}
                    alt={title || "Product Image"}
                    className="object-cover block  "
                    width={270}
                    height={270}
                />
                <div>
                    <h2 className="mb-7 text-xl ">{title}</h2>
                    <h3 className="text-gray-500 uppercase mb-2">{type}</h3>
                    <p className="text-lg">{text || "No description available."}</p>
                    <p className="text-xl mt-3 text-Primary">$ {price}</p>
                    <div className="flex gap-2 mt-4 flex-col md:flex-row ">
                        <button className=" flex-row flex  gap-2 bg-Primary-500  hover:bg-Primary-400 transition-colors  text-white font-bold rounded-lg py-2 px-5">
                            {<ShoppingCart />}Add to cart</button>
                    </div>
                </div>
      
      
            </div>
        </>
    )
}

export default ProductTitle
