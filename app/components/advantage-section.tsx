import { CurrencyDollarIcon, GlobeIcon, ShieldCheckIcon } from "./icons";

export default function AdvantageSection() {
  return (
    // Exemplo de Seção de Vantagens
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Por que usar nosso serviço?</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: <GlobeIcon />,
          title: "Acesso Global",
          description: "Compre em qualquer site internacional com ajuda de nossos assistentes"
        },
        {
          icon: <ShieldCheckIcon />,
          title: "Segurança",
          description: "Transações protegidas e acompanhamento completo"
        },
        {
          icon: <CurrencyDollarIcon />,
          title: "Economia",
          description: "Evite taxas abusivas e encontre os melhores preços"
        }
      ].map((item, index) => (
        <div 
          key={index}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
        >
          <div className="text-blue-500 mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}