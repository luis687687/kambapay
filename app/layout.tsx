"use client"
import {useEffect} from "react"
import {AuthProvider} from "@/app/context/auth-context"
import "./globals.css";
import { SidebarMenu } from "./components/slide-menu";
import Aos from "aos";
import "aos/dist/aos.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    useEffect(() => {
      Aos.init({
        duration: 800,    
        once: false,
        mirror: false,     
      });
    }, []);
  
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <SidebarMenu />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
