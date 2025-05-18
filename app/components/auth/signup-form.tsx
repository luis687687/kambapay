"use client"
// components/auth/SignUpForm.tsx
import { useState } from 'react';
import { ArrowRightIcon, EnvelopeIcon, LockClosedIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validação e submissão do formulário
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* TopBar simplificada */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">buyAssist</h1>
          <Link href="/about" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
            Saiba mais
          </Link>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Crie sua conta
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Já tem uma conta?{' '}
              <Link href="/login" className="font-medium text-blue-500 hover:text-blue-400 transition-colors">
                Acesse aqui
              </Link>
            </p>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Nome e Sobrenome - Linha */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">Primeiro nome</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                    placeholder="Primeiro nome"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="sr-only">Sobrenome</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                  placeholder="Sobrenome"
                />
              </div>
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="phone" className="sr-only">Telefone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                  placeholder="Telefone"
                />
              </div>
            </div>

            {/* Email */}
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
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Senha */}
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
                  autoComplete="new-password"
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                  placeholder="Crie uma senha"
                />
              </div>
            </div>

            {/* Confirmar Senha */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirme sua senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={6}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>

            {/* Termos e Condições */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                Concordo com os{' '}
                <Link href="/terms" className="text-blue-500 hover:text-blue-400 transition-colors">
                  Termos de Serviço
                </Link>{' '}
                e{' '}
                <Link href="/privacy" className="text-blue-500 hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </Link>
              </label>
            </div>

            {/* Botão de Submissão */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-50 transition-colors"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ArrowRightIcon className="h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
                </span>
                Criar conta
              </button>
            </div>
          </form>

          {/* Divisor */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Ou cadastre-se com
              </span>
            </div>
          </div>

          {/* Login Social */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-50 transition-colors"
            >
              Google
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-50 transition-colors"
            >
              Facebook
            </button>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} buyAssist. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}