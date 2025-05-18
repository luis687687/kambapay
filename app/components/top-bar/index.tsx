// components/TopBar.js
import { MagnifyingGlassIcon, BellIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { Avatar } from './avatar'; // Componente de avatar personalizado

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:hidden">
        <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>   
      </div>


        <div className="flex items-center justify-between h-16">
          {/* Logo e Navegação Primária */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">buyAssist</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Dashboard', 'Solicitações', 'Histórico', 'Assistentes'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 px-1 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Área de Busca e Ações */}
          <div className="flex items-center space-x-4">
            {/* Barra de Busca */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar solicitações..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
              />
            </div>

            {/* Ícones de Ação */}
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200">
              <BellIcon className="h-5 w-5" />
            </button>

            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200">
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </button>

            {/* Divisor */}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {/* Perfil do Usuário */}
            <div className="relative hidden">
              <button className="flex items-center space-x-2 focus:outline-none group">
                <Avatar 
                  src="/path-to-avatar.jpg" 
                  alt="User avatar" 
                  size="sm"
                />
                <span className="hidden md:inline-block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  João Silva
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}