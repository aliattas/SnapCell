"use client"
import React from "react"
import Card from "./Card"
import { getLatestProducts } from "../_utils/producstApi"
import { useEffect, useState } from "react"
// import ProductsList from "./ProductsList"


const ProductsSections = () => {

  const [data, setData] = useState()
  const [error , setError] = useState(false)
  useEffect(() => {
    getData()
  }, []);
  
  const getData = () => {
    getLatestProducts().then(res => {
      const DATA = res.data.data
      console.log(res.data.data[0].banner.url)
      setData(e => DATA)
    }).catch(err => setError(e => err ))
  
  }
  if (error) return <div className="p-2 text-center font-bold text-3xl">{error.message}❌ </div>
  if (data == null) return <div class="loader m-auto mb-9"></div>
  
 console.log()
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 ">
      {data.map((e, key) => {
        return (
          <div key={key} className="  w-96 p-7">
            <Card
              img={"http://localhost:1337"+e?.banner?.url}
              title={e?.title}
              contant={e?.content}
              price={e?.price}
              id={e?.id} />
          </div>
        )
      })}
    </div>
  )
};

export default React.memo(ProductsSections)
