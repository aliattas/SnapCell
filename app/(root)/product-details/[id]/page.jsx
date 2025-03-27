"use client"
import ListCardsType from "../_components/ListCardsType"
import { getProductById } from "app/_utils/producstApi"
import ProductTitle from "../_components/ProductTitle"
import { useState, useEffect } from "react"


const Page = ({ params }) => {
  const { id } = params
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  if (isNaN(Number(id))) return <div>Invalid ID</div>

  useEffect(() => {
    if (!id) return

    const getData = async () => {
      try {
        const res = await getProductById(id)
        const fetchedData = res.data?.data?.[0]
        if (fetchedData) {
          setData(fetchedData)
        } else {
          setData(undefined)
        }
      } catch (err) {
        setError("Failed to fetch product.")
      }
    }
    
    getData()
  }, [])

  if (error) return <div>{error}</div>
  if (data === undefined) return <div>Not Found  </div>
  if (data === null) return <div className="loader m-auto mt-[12rem]"></div>
  return (
    <>
      <ProductTitle
        img={`http://localhost:1337 ${data.banner.url}`}
        title={data?.title}
        type={data.type}
        text={data?.content}
        price={data?.price}
        data_id={data?.id}
      />
      <div className="font-bold text-gray-400 px-[5rem]">
        <h4>Similar Products </h4>
        <div>
          <ListCardsType type={data.type} />
        </div>
      </div>
    </>
  )
}

export default Page