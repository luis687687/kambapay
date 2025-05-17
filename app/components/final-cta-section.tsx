// components/FinalCTASection.js
export default function FinalCTASection() {
  return (
    <section className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pronto para simplificar suas compras internacionais?</h2>
        <p className="text-gray-600 mb-8">
          Junte-se a milhares de clientes que já compram no exterior com confiança e tranquilidade
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md">
          Comece agora - é grátis
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Sem custos iniciais • Pague apenas quando fizer uma compra
        </p>
      </div>
    </section>
  );
}