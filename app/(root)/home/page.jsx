import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <section className=' p-32 gap-5  flex md:flex-row flex-col justify-center items-center  '>
        <div className='p-2 '>
              <h1 className='font-bold text-4xl  md:text-5xl lg:text-6xl mb-6'>Only Best <span className='text-Primary'> True devices </span>phones and more</h1>
              <p className='max-w-lg text-2xl  text-Primary font-semibold'>Ditch the wires, upgrade your phone & laptop</p>
          </div>

          <Image src={"/re-home.png"} height={350} width={350}  className="object-contain  w-full " alt='logo'></Image>
    </section>
  )
}

export default page
