"use client";
// components/SidebarMenu.tsx
import { useState, useEffect, useContext } from 'react';
import Link from "next/link";
import styles from "./styles.module.css";
import { XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '@/app/context/auth-context';
import { APP_ROUTE } from '@/utils/constants';
import { TopBar, TopBarLogo } from '../top-bar';

export function SidebarMenu() {
    
    const { isOpen, setIsOpen } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);

//   // Verifica o tamanho da tela
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//       setIsOpen(!isMobile); // Fecha menu no mobile inicialmente
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

  // Fecha menu ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Botão Toggle */}
      {/* <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3BottomLeftIcon className="w-6 h-6" />
        )}
      </button> */}

      {/* Overlay para mobile */}
      {isMobile && isOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Lateral */}
      <nav 
        className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${
          isMobile ? styles.mobile : ''
        }`}
        aria-label="Navegação principal"
      >
        <div className={styles.menuHeader}>
          <TopBarLogo />
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <Menu className={styles.navList} />
      </nav>
    </>
  );
}

// Componente de itens do menu
function Menu({ className }: { className?: string }) {
    
    const { isOpen, setIsOpen } = useContext(AuthContext);
  return (
    <ul className={`${styles.menu} ${className || ''}`}>
      {APP_ROUTE.map((item, i) => (
        <li key={i} className={styles.menuItem}>
          <Link 
            href={item.path}
            className={styles.menuLink}
            onClick={() => window.innerWidth < 768 && setIsOpen(false)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}