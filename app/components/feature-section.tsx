// components/FeaturesSection.js
export default function FeaturesSection() {
  const features = [
    {
      icon: '🌐',
      title: "Acesso Global",
      description: "Compre em qualquer site internacional com ajuda de nossos assistentes especializados"
    },
    {
      icon: '🛡️',
      title: "Proteção Total",
      description: "Garantia de entrega ou seu dinheiro de volta em todas as compras assistidas"
    },
    {
      icon: '💸',
      title: "Melhor Preço",
      description: "Nossos assistentes negociam para você conseguir o melhor negócio possível"
    }
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Como fazemos sua compra ser perfeita</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toda a tecnologia e expertise que você precisa para comprar no exterior com confiança
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-sm"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}