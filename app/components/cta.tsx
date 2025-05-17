

export default function CTA(){

  return(
    // Exemplo de Seção CTA Final
<section className="py-20 bg-blue-500 text-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Pronto para fazer suas compras internacionais?</h2>
    <p className="text-xl mb-8 opacity-90">Cadastre-se agora e comece a comprar com assistência especializada</p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
        Criar conta gratuita
      </button>
      <button className="border border-white hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
        Falar com um especialista
      </button>
    </div>
  </div>
</section>
  )
}