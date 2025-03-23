import { Lato } from "next/font/google";
import "./globals.css";
import Header from "../_components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const inter = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "SparkCart",
  description: "the best and the coolest store have been made ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      { <Header />}
        {children}
      </body>
      </html>
  );
}
