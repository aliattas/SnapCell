import { Lato } from "next/font/google";
import "./globals.css";
import Providers from "./providers";  // Import the new Providers component

const inter = Lato({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
