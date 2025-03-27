"use client"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useParams, useSearchParams } from 'next/navigation';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_KEY_PUBLISHABLE_STRIPE);


export default function page() {
  const searchParams = useSearchParams()

  const options = {
      // passing the client secret obtained from the server
      mode: "payment",
      currency: "usd", 
      amount :  parseInt(searchParams.get("total"))
  
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm  amount={parseInt(searchParams.get("total"))}/>
    </Elements>
  );
};