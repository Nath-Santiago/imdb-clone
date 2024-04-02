import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { // Metadata of the Website,
  title: "IMDb Clone",
  description: "A practice website for IMDB Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers> 
           <Header/> {/* Everything inside Providers will be ClientSide  */} 
          {children}
        </Providers>
      </body>
    </html>
  );
}
