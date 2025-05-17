// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <span className="text-blue-600 text-sm font-medium">
            Novidade: Agora com suporte para eBay
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Compras internacionais <span className="text-blue-500">sem complicação</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Conectamos você a compradores especializados que te ajudam a encontrar exatamente o que precisa nos melhores sites internacionais.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Comece agora - é grátis
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm">
            Ver demonstração
          </button>
        </div>
        
        {/* Preview animado */}
        <div className="mt-16 rounded-xl border border-gray-200 bg-white p-1 shadow-sm overflow-hidden">
          <div className="bg-gray-50 rounded-lg h-80 w-full flex items-center justify-center">
            <span className="text-gray-400">Preview animado aparecerá aqui</span>
          </div>
        </div>
      </div>
    </section>
  );
}