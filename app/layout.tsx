"use client"
import {useEffect} from "react"
import {AuthProvider} from "@/app/context/auth-context"
import "./globals.css";
import { SidebarMenu } from "./components/slide-menu";



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
        <AuthProvider>
          <SidebarMenu />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
