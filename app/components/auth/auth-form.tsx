"use client"
// components/auth/AuthForm.js
import { useState, useContext, useEffect } from 'react';
import { ArrowRightIcon, EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from "next/Link"
import { AuthContext } from "@/app/context/auth-context"
import { useRouter } from 'next/navigation';
import { Loading } from '../loading';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const {signIn, user} = useContext(AuthContext)
  const router = useRouter();

  useEffect(() => {
    if(user.user_id)
      router.push("/")
  }, [user]);

  if(user.user_id)
    return <Loading showProgress loadingText="Carregando recursos..." />;


  return (
    <div className="min-h-screen bg-white flex flex-col">

      <main className="flex-grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {isLogin ? 'Acesse sua conta' : 'Crie sua conta'} 
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? 'Ou ' : 'Já tem uma conta? '}
              <Link
                href={"/signup"}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {isLogin ? 'crie uma conta' : 'acesse aqui'}
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={(e) =>{ 
            e.preventDefault()
            signIn({email, password})
          }}>
            <div className="rounded-md space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="sr-only">Nome completo</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
                      placeholder="Nome completo"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
                    placeholder={isLogin ? "Senha" : "Crie uma senha"}
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-200 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Lembrar de mim
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ArrowRightIcon className="h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
                </span>
                {isLogin ? 'Entrar' : 'Criar conta'}
              </button>
            </div>
          </form>

        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <Link href={"/"}>kambaPay</Link>. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}