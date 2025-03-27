// https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PaymentConfirm() {
	return (
		<div className='flex flex-col items-center justify-center px-5 mt-4'>
			<Image src='/payment-confirm.gif'
				alt='check'
				width={230}
				height={230}
			/>
			<h2 className='text-[24px]'>Payment Successful !</h2>
			<h2 className='text-[17px] text-center mt-6 text-gray-500'>We sent an email with your
				order confirmation
				along with Digital Content</h2>
			<Link
				href="/"
				className='p-2 mt-6 text-white font-bold rounded-md bg-primary bg-cyan-500'>
				Go to Home</Link>

		</div>
	)
}

export default PaymentConfirm