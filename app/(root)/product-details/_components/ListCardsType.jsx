import { useEffect, useState } from "react"
// import ListCardsType from "./CardTypes"
import { getProductsByType } from "app/_utils/producstApi"
import CardTypes from "./CardTypes"


const ListCardsType = ({ type }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        getProductsByType(type).then(res => setData(res.data.data))
    }, [])

    if (!data) return <div className="loading"></div>
    return (
        <div className="flex md:flex-row flex-col gap-5 mt-8  items-center ">
            {data.map((e, i) => {
                return <CardTypes key={i} img={"http://localhost:1337"+e.banner.url} type={e.type} title={e.title} price={e.price} id={e.id} />
            })}
        </div>
    )
}

export default ListCardsType
