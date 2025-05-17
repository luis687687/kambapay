import { StarIcon } from "./icons";


export default function DepoimentSection(){

  return(
    // Exemplo de Seção de Depoimentos
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">O que nossos clientes dizem</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          name: "Ana Silva",
          role: "Comprou eletrônicos no eBay",
          testimonial: "Consegui o celular que queria por metade do preço que encontraria aqui. O assistente foi incrível!",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Comprou peças de carro raras",
          testimonial: "Sem esse serviço nunca teria encontrado a peça que precisava. Todo o processo foi transparente.",
          rating: 5
        }
      ].map((item, index) => (
        <div 
          key={index}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex mb-4">
            {[...Array(item.rating)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600 italic mb-6">&alt;{item.testimonial}&alt;</p>
          <div>
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}