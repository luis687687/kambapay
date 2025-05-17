

export default function StepSection(){

  return(
    // Exemplo de Seção de Funcionamento
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Como funciona</h2>
    
    <div className="relative">
      <div className="hidden md:block absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>
      
      {[
        {
          step: "1",
          title: "Crie sua solicitação",
          description: "Descreva o produto que deseja e onde quer comprar"
        },
        {
          step: "2",
          title: "Conecte-se com um assistente",
          description: "Nossos especialistas entrarão em contato com você"
        },
        {
          step: "3",
          title: "Acompanhe o processo",
          description: "Receba atualizações em tempo real sobre sua compra"
        },
        {
          step: "4",
          title: "Receba seu produto",
          description: "Seu item chegará com toda segurança e garantia"
        }
      ].map((item, index) => (
        <div 
          key={index}
          className={`mb-8 md:mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} items-center`}
        >
          <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 order-1' : 'md:pl-8 order-2'}`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className={`w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold my-4 md:my-0 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
            {item.step}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}