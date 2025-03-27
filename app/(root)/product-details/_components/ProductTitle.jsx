"use clinet"
import React, { useContext } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react';
import cartApi from 'app/_utils/cartApi';
import { useUser } from '@clerk/nextjs';
import { CartContext } from 'app/_context/CartContent';

const ProductTitle = ({ img, title, type, text, price, data_id }) => {
    const { user } = useUser()
    const { cart, setCart } = useContext(CartContext)
    
    const addToCart = (e) => {
        
        if (!user) return
        
        const data = {
            data: {
                username: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                products: [data_id]
            }
        }
        cartApi(data).then(res => {
            setCart(oldCart => [
                ...oldCart,
                {
                    id: res?.data?.data?.id,
                    product: { img, title, type, text, price }
                }
            ])
        }).catch(err => {
            console.log(err)
        })
    }
    
    
    return (
      
        <>
            <div className="flex  flex-col sm:flex-row mb-10 mt-14 container justify-center items-center px-20 gap-7">
                <Image
                    src={img.split(" ").join("")}
                    alt={title || "Product Image"}
                    className="object-cover block"
                    width={270}
                    height={270}
                />
                <div>
                    <h2 className="mb-7 text-xl ">{title}</h2>
                    <h3 className="text-gray-500 uppercase mb-2">{type}</h3>
                    <p className="text-lg">{text || "No description available."}</p>
                    <p className="text-xl mt-3 text-Primary">$ {price}</p>
                    <div className="flex gap-2 mt-4 flex-col md:flex-row ">
                        <button onClick={e => addToCart(e)} className=" flex-row flex  gap-2 bg-Primary-500  hover:bg-Primary-400 transition-colors  text-white font-bold rounded-lg py-2 px-5">
                            {<ShoppingCart />}Add to cart</button>
                    </div>
                </div>     
            </div>
        </>
    )
}

export default ProductTitle
