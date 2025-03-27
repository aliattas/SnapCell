import { Lato } from "next/font/google";
import "./globals.css";
import Providers from "./providers";  // Import the new Providers component
import Footer from "app/_components/Footer";

const inter = Lato({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}
