"use client"
// components/SplitContentSection.js
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function SplitContentSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Coluna esquerda - Texto */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-600 font-medium mb-3">
                Compra Assistida
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Gerencie suas compras internacionais de ponta a ponta
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tenha total visibilidade e controle sobre cada etapa do processo de compra, desde a pesquisa até a entrega na sua porta.
              </p>
              
              <div className="space-y-6">
                {[
                  "Monitoramento em tempo real do status",
                  "Notificações automáticas em cada etapa",
                  "Histórico completo de todas as compras",
                  "Suporte dedicado para cada solicitação"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 inline-flex items-center text-blue-600 font-medium group">
                Saiba mais sobre o processo
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
          
          {/* Coluna direita - Cards */}
          <div className="md:w-1/2">
            <div className="space-y-6 sticky top-20">
              {/* Card 1 - Status da Compra */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Status da Compra</h3>
                  <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full">
                    Em trânsito
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <ShoppingBagIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">iPhone 15 Pro</p>
                      <p className="text-sm text-gray-500">eBay • Pedido #EB-78945</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="relative pt-4">
                      <div className="absolute top-0 left-0 h-1 bg-gray-200 rounded-full w-full"></div>
                      <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full w-3/4"></div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Pedido feito</span>
                        <span>Em trânsito</span>
                        <span>Entregue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 2 - Atualização Recente */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Atualização Recente</h3>
                  <span className="text-xs text-gray-500">há 2 horas</span>
                </div>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Ana Silva</p>
                      <p className="text-sm text-gray-500">Sua assistente de compras</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
                    <p>Seu pedido foi despachado pelo vendedor e está a caminho do centro de distribuição. O prazo estimado de entrega é 5-7 dias úteis.</p>
                  </div>
                  <button className="text-sm text-blue-600 font-medium inline-flex items-center">
                    Ver detalhes completos
                    <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </motion.div>
              
              {/* Card 3 - Ação Necessária */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs border-l-4 border-l-orange-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Ação Necessária</h3>
                  <span className="text-xs px-2 py-1 bg-orange-50 text-orange-600 rounded-full">
                    Pendente
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    Precisamos da confirmação do endereço de entrega para o pedido #EB-78945. Por favor, verifique os detalhes abaixo.
                  </p>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium">
                      Confirmar endereço
                    </button>
                    <button className="flex-1 border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg text-sm font-medium">
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componentes de ícone (adicione ao seu arquivo de ícones)
function ShoppingBagIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}