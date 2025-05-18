"use client"
import {useEffect} from "react"

import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    useEffect(() => {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          offset: 100,
        });
      });
    }, []);
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
