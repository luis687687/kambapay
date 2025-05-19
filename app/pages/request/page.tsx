"use client"
// pages/request.tsx
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon, ShoppingCartIcon, MapPinIcon, CreditCardIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import { AuthContext } from "@/app/context/auth-context"
import { createRequestWithDelivery } from "@/app/services/requestServices";


type FormData = {
  productDescription: string;
  productLink: string;
  budget: string;
  installments: number;
  contactPhone: string;
  contactEmail: string;
  deliveryAddress: string;
  additionalNotes: string;
};

export default function RequestPage() {
  const router = useRouter();
  const {user} = useContext(AuthContext)

  const [formData, setFormData] = useState<FormData>({
    productDescription: '',
    productLink: '',
    budget: '',
    installments: 1,
    contactPhone: '',
    contactEmail: '',
    deliveryAddress: '',
    additionalNotes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!user?.user_id) {
    alert("Usuário não autenticado");
    return;
  }

  try {
    // opcional: mostrar um loader aqui...
    await createRequestWithDelivery({
      user_id: user.user_id,
      description: formData.productDescription,
      link: formData.productLink,
      // não temos budget no backend, então ignoramos formData.budget
      prestations: formData.installments,
      status: 0, // status inicial
      phone: formData.contactPhone,
      email: formData.contactEmail,
      address: formData.deliveryAddress,
      obs: formData.additionalNotes,
    });

    // redireciona após sucesso
    router.push("/pages/request-success");
  } catch (err: any) {
    // tratar erro
    console.error(err);
    alert(err.message || "Erro ao enviar solicitação");
  } finally {
    // opcional: esconder loader
  }
};


  return (
    <>
      <Head>
        <title>Solicitar Compra - buyAssist</title>
      </Head>

      <div className="min-h-screen ">


        <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 ">
          {/* Cabeçalho */}
          <div 
            className="text-center mb-12"
            data-aos="fade-down"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Solicitar Nova Compra
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preencha os detalhes do produto que deseja e nós encontraremos a melhor opção para você
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-8 grid grid-cols-2 gap-x-6">
            {/* Seção 1: Detalhes do Produto */}
            <div 
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4">
                  <ShoppingCartIcon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Detalhes do Produto</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição detalhada do produto *
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    rows={4}
                    required
                    value={formData.productDescription}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                    placeholder="Descreva o produto que deseja comprar, incluindo marca, modelo, cor, tamanho, etc."
                  />
                </div>

                <div>
                  <label htmlFor="productLink" className="block text-sm font-medium text-gray-700 mb-1">
                    Link do produto (se disponível)
                  </label>
                  <input
                    id="productLink"
                    name="productLink"
                    type="url"
                    value={formData.productLink}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                    placeholder="https://www.exemplo.com/produto"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                

                  <div>
                    <label htmlFor="installments" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de prestações
                    </label>
                    <select
                      id="installments"
                      name="installments"
                      value={formData.installments}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                        <option key={num} value={num}>
                          {num}x
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção 2: Contato e Entrega */}
            <div 
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-purple-100 text-purple-600 mr-4">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Contato e Entrega</h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone para contato *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="contactPhone"
                        name="contactPhone"
                        type="tel"
                        required
                        value={formData.contactPhone}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                        placeholder="(244) 9xx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail alternativo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Endereço de entrega *
                  </label>
                  <input
                    id="deliveryAddress"
                    name="deliveryAddress"
                    type="text"
                    required
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                    placeholder="Rua, bairro, município, cidade"
                  />
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                    Observações adicionais
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-50 sm:text-sm transition-colors"
                    placeholder="Alguma informação adicional que devemos saber?"
                  />
                </div>
              </div>
            </div>

            {/* Seção 3: Método de Pagamento */}
            <div 
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 opacity-70"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-green-100 text-green-600 mr-4">
                  <CreditCardIcon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Método de Pagamento</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                    defaultChecked
                    disabled
                  />
                  <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                    Cartão de Crédito
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="bank-transfer"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                    disabled
                  />
                  <label htmlFor="bank-transfer" className="ml-3 block text-sm font-medium text-gray-700">
                    Transferência Bancária
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="pix"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                    disabled
                  />
                  <label htmlFor="pix" className="ml-3 block text-sm font-medium text-gray-700">
                    PIX
                  </label>
                </div>
              </div>
            </div>

            {/* Botão de Submissão */}
            <div 
              className="flex justify-end"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                type="submit"
                className={`inline-flex 

                items-center px-6 py-3 border border-transparent text-base 
                font-medium rounded-lg shadow-sm text-white bg-blue-600
                 hover:bg-blue-700 focus:outline-none 
                 focus:ring-2 focus:ring-offset-2
                  focus:ring-blue-500 transition-colors group
                  h-fit
                  
                  `}
              >
                Enviar Solicitação
                <ArrowRightIcon className="ml-2 h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}