"use client"; 
import { ClerkProvider } from "@clerk/nextjs";
import { useState } from "react";
import Header from "app/_components/Header";
import { CartContext } from "app/_context/CartContent";
export default function Providers({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        {children}
      </CartContext.Provider>
    </ClerkProvider>
  );
}
