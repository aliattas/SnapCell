import { CartContext } from 'app/_context/CartContent'
import React, { useContext } from 'react'

const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <div
      className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md broder shadow-sm absolute  mx-10 right-10 top-12 p-5 overflow-auto "
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((e , k) => {
            return (
              <li className="flex items-center gap-4" key={k}>
                <img
                  src={`http://localhost:1337${e?.product?.img?.slice(22) || e?.product?.banner?.url}`}
                  alt="items-cart"
                  className="size-16 rounded-sm object-cover"
                />
 
                <div>
                 
                  <h3 className="text-sm text-gray-900">{e?.product?.title}</h3>
                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">type:</dt>
                      <dd className="inline">{ e.product.type   }</dd>
            </div>

            <div>
              <dt className="inline">Price:</dt>
                      <dd className="inline">{ e.product.price}</dd>
            </div>
          </dl>

                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="space-y-4 text-center mt-5      ">
        <a
          href="/cart"
          className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400 mb-5"
        >
          View my cart 
        </a>


        <a
          href="/"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </div>
  )
  
}

export default Cart
