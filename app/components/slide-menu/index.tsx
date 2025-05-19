"use client";
import { useState, useEffect, useContext } from 'react';
import Link from "next/link";
import styles from "./styles.module.css";
import { 
  XMarkIcon, 
  Bars3BottomLeftIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { AuthContext } from '@/app/context/auth-context';
import { APP_ROUTE } from '@/utils/constants';
import { TopBarLogo } from '../top-bar';
import { Avatar } from '../top-bar/avatar';

export function SidebarMenu() {
  const { isOpen, setIsOpen, user, logout } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    console.log("isOpen", user);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // Mantém aberto em desktop
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
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

        {/* Seção do Usuário */}
        <div className={styles.userSection}>
          {user?.user_id ? (
            <>
              <div className={styles.userInfo}>
                <Avatar 
                  src={user.avatar} 
                  alt={user.user_name} 
                  size="sm"
                />
                <div>
                  <p className={styles.userName}>{user.user_name}</p>
                  <p className={styles.userEmail}>{user.user_email}</p>
                </div>
              </div>
              <button 
                onClick={logout}
                className={styles.logoutButton}
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                Sair
              </button>
            </>
          ) : (
            <div className={styles.authButtons}>
              <Link 
                href="/login" 
                className={styles.authButtonPrimary}
                onClick={() => setIsOpen(false)}
              >
                <UserCircleIcon className="w-5 h-5" />
                Entrar
                <ChevronRightIcon className="w-4 h-4 ml-auto" />
              </Link>
              <Link 
                href="/signup" 
                className={styles.authButtonSecondary}
                onClick={() => setIsOpen(false)}
              >
                <UserPlusIcon className="w-5 h-5" />
                Criar conta
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

function Menu({ className }: { className?: string }) {
  const { setIsOpen } = useContext(AuthContext);
  
  return (
    <ul className={`${styles.menu} ${className || ''}`}>
      {APP_ROUTE.map((item, i) => (
        <li key={i} className={styles.menuItem}>
          <Link 
            href={item.path}
            className={styles.menuLink}
            onClick={() => window.innerWidth < 768 && setIsOpen(false)}
          >
            {item.icon && <item.icon className="w-5 h-5 mr-3" />}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}