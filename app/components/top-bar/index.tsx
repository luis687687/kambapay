// components/TopBar.tsx
"use client"
import { useState, useContext } from 'react';
import { 
  BellIcon, 
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { Avatar } from './avatar';
import { APP_ROUTE } from "@/utils/constants";
import { AuthContext } from "@/app/context/auth-context";


import Link from "next/link";

export function TopBar() {
  // Estado para simular autenticação - na prática viria de um contexto/state global
  
  const { user , isOpen, setIsOpen} = useContext(AuthContext);
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="flex items-center justify-between h-16">
          {/* Menu Mobile (Hamburger) */}
          <div className="flex md:hidden">
            <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={ () => setIsOpen(!isOpen) }
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>   
          </div>

          {/* Logo e Navegação Primária */}
          <div className="flex items-center space-x-6">
           <TopBarLogo />
            
            <nav className="hidden md:flex space-x-8">
              {APP_ROUTE.map((item, index) => (
                <Link 
                  key={index}
                  href={item.path}
                  className="text-gray-700 hover:text-blue-600 px-1 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Área de Ações */}
          <div className="flex items-center space-x-4">
            {/* Ícones de Ação (sempre visíveis) */}
            <button 
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              aria-label="Notificações"
            >
              <BellIcon className="h-5 w-5" />
            </button>

            <button 
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              aria-label="Ajuda"
            >
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </button>

            {/* Divisor */}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {/* Área de Autenticação */}
            {user ? (
              // Usuário logado - Mostrar Avatar
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 focus:outline-none group">
                  <Avatar 
                    src={user.avatar} 
                    alt={user.user_name} 
                    size="sm"
                  />
                  <span className="hidden md:inline-block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    {user.user_name}
                  </span>
                </button>
              </div>
            ) : (
              // Usuário não logado - Mostrar botões de Login/Signup
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg transition-colors duration-200 group"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1 text-gray-500 group-hover:text-blue-500" />
                  <span className="hidden md:inline">Entrar</span>
                </Link>
                
                <Link
                  href="/signup"
                  className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 group"
                >
                  <UserPlusIcon className="h-5 w-5 mr-1 text-blue-200 group-hover:text-blue-100" />
                  <span className="hidden md:inline">Cadastrar</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}


export const TopBarLogo = () => {
  return (
      <div className="flex-shrink-0">
      <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
        kambaPay
      </Link>
    </div>
    )
}