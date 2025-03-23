import { HeartAdd } from "iconsax-react"
import React from "react"
const Card =({ img, title, contant, price , id }) => {
return(
    <div className='flex justify-center items-center' >
    <a href={`/product-details/${id}`} className="group relative  overflow-hidden flex items-center justify-center flex-col  ">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>
  
        <HeartAdd size="20" color={ "#66CC8A"}  />
        </button>
  
        <img
           src={img}
          loading={"lazy"}
          alt="device img"
          className=" block object-cover transition duration-500 group-hover:scale-105 sm:h-72 "
        />
  
        <div className="relative border border-gray-100 bg-white p-6">
          <p className="text-gray-700">
          ${ price  }
          </p>
  
        <h3 className="mt-1.5 text-lg font-medium text-gray-900">{ title}</h3>
  
          <p className="mt-1.5 line-clamp-3 text-gray-700">
          { contant}
          </p>
  
          <form className="mt-4 flex gap-4 ">
            <button
              className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
            >
              Add to Cart
            </button>
  
            <button
              type="button"
              className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
            >
              Buy Now
            </button>
          </form>
        </div>
      </a>
      </div>
    )

  
  
}

export default Card
