// components/DemoSection.js
export default function DemoSection() {
  const steps = [
    {
      title: "1. Descreva seu produto",
      description: "Nos diga o que você está procurando e onde gostaria de comprar"
    },
    {
      title: "2. Conecte-se com um assistente",
      description: "Em minutos, um especialista entrará em contato com você"
    },
    {
      title: "3. Aprove o orçamento",
      description: "Receba opções com preços e condições claras"
    },
    {
      title: "4. Receba sua compra",
      description: "Acompanhe cada etapa até a entrega na sua porta"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Simples, rápido e sem estresse</h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-2 shadow-sm">
              <div className="bg-white rounded-lg h-80 w-full flex items-center justify-center">
                <span className="text-gray-400">Demonstração interativa ou vídeo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}