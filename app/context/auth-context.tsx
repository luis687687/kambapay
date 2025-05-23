"use client"
// contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import {getProfile}  from '../services/userServices';
import { useRouter } from 'next/navigation';
import {login} from "@/app/services/userServices"


export interface IUser {

  user_id: string;
  user_name: string;
  user_email: string;
  avatar: string;
  user_phone: string;
  // Adicione outros campos conforme necessário
}

interface AuthContextType {
  user: IUser; // Substitua por seu tipo de usuário
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: ({email, password} : {email:string, password:string}) => void;
  logout: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(getProfile());
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const userData =  getProfile();
          setUser(userData);
        }
      } catch (error) {
        localStorage.removeItem('authToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = ({
    email, password
  } : {email:string, password:string} ) => {
    login({
      email, password
    }
    ).then( e => {

      localStorage.setItem("user", JSON.stringify(e))
      setUser(e)
    } ).catch(console.error)
  }

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, signIn, logout, isOpen, setIsOpen }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}