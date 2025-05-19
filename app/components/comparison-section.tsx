// components/ComparisonSection.js
export default function ComparisonSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-duration="950">Por que escolher nosso serviço?</h2>
        
        <div className="mt-12 border border-gray-200 rounded-xl overflow-hidden shadow-sm" data-aos="zoom-in"
        data-aos-delay="300">
          <table className="w-full" >
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left font-medium text-gray-900"></th>
                <th className="py-4 px-6 text-left font-medium text-gray-900">Comprar sozinho</th>
                <th className="py-4 px-6 text-left font-medium text-gray-900">Com nosso serviço</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["Suporte multilíngue", "❌", "✅"],
                ["Negociação de preços", "❌", "✅"],
                ["Garantia de entrega", "❌", "✅"],
                ["Acompanhamento 24/7", "❌", "✅"],
                ["Solução de problemas", "Você resolve", "Nós resolvemos"],
              ].map(([feature, alone, withUs], index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-left text-gray-900 font-medium">{feature}</td>
                  <td className="py-4 px-6 text-left text-gray-600">{alone}</td>
                  <td className="py-4 px-6 text-left text-gray-600">{withUs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}