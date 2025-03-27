import Image from "next/image"
import { useRouter } from "next/navigation"
const CardTypes = ({ img, price, type, title, id }) => {
    const router = useRouter()
    return (
        <div className="cursor-pointer  w-fit " onClick={e => router.push(`/product-details/${id}`)}>
            <Image src={img} width={240} height={240} alt="device-type-image" />
            <div className="flex text-sm gap-2 mt-4 items-center ">
                <div className="p-1">
                    <p>{title}</p>
                    <p>{type}</p>
                </div>
                <p >${price}</p>
            </div>            
        </div>
    )
}

export default CardTypes
