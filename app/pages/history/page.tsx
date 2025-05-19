// pages/history.tsx
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowRightIcon, 
  ShoppingBagIcon, 
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  TruckIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';
import Head from 'next/head';
import { listRequestsByUser } from '@/app/services/requestServices';


import { AuthContext } from '@/app/context/auth-context';
import { useContext } from 'react';
import { list } from 'postcss';


type RequestStatus = 'completed' | 'processing' | 'cancelled' | 'shipped';

interface RequestItem {
  id: string;
  product: string;
  date: string;
  status: RequestStatus;
  price: string;
  trackingCode?: string;
  lastUpdate: string;
}

export default function HistoryPage() {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Dados de exemplo
  // const requests: RequestItem[] = [
  //   {
  //     id: 'RQ-78945',
  //     product: 'iPhone 15 Pro 256GB - Azul',
  //     date: '15/05/2023',
  //     status: 'completed',
  //     price: 'R$ 5.799,00',
  //     trackingCode: 'AB123456789BR',
  //     lastUpdate: 'Entregue em 22/05/2023'
  //   },
  //   {
  //     id: 'RQ-78946',
  //     product: 'Nike Air Jordan 1 Retro High OG',
  //     date: '18/05/2023',
  //     status: 'shipped',
  //     price: 'R$ 1.299,00',
  //     trackingCode: 'CD987654321BR',
  //     lastUpdate: 'Enviado em 20/05/2023'
  //   },
  //   {
  //     id: 'RQ-78947',
  //     product: 'PlayStation 5 + Controle Extra',
  //     date: '20/05/2023',
  //     status: 'processing',
  //     price: 'R$ 4.599,00',
  //     lastUpdate: 'Em negociação com vendedor'
  //   },
  //   {
  //     id: 'RQ-78948',
  //     product: 'Relógio Casio G-Shock DW5600',
  //     date: '10/05/2023',
  //     status: 'cancelled',
  //     price: 'R$ 899,00',
  //     lastUpdate: 'Cancelado em 12/05/2023'
  //   },
  // ];


  const [requests, setRequests] = useState<RequestItem[]>([]);


  
  const filteredRequests = activeFilter === 'all' 
    ? requests 
    : requests.filter(req => req.status === activeFilter);

  const getStatusIcon = (status: RequestStatus) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'processing':
        return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case 'cancelled':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      case 'shipped':
        return <TruckIcon className="h-5 w-5 text-purple-500" />;
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const statusArray = [
    { id: 'shipped', label: 'Enviado' },
    { id: 'processing', label: 'Em andamento' },
    { id: 'completed', label: 'Concluído' },
    { id: 'cancelled', label: 'Cancelado' },
    
  ];
  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };


  const listAllRequests = async () => {
    
    // const response = await listRequestsByUser(userId);
    // setRequests(response);

    setRequests([])
    const response  = await listRequestsByUser(user.user_id);

    response.map((request: any) => {
      setRequests((prev) => [...prev, {
        id:request.id,
        // id: request.id,
        product: request.description,
        date: request.created_at,
        status: statusArray[request.status].id as RequestStatus,
        price: request.prestations,
        trackingCode: "brevemente",
        lastUpdate:  statusArray[request.status].label+" em " +request.updated_at
      }])

    })

    
  }
  useEffect(() => { 

    listAllRequests();
    
    }, []);


  return (
    <>
      <Head>
        <title>Histórico de Solicitações - buyAssist</title>
      </Head>

      <div className="min-h-screen ">
      

        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          {/* Cabeçalho */}
          <div 
            className="text-center mb-12"
            data-aos="fade-down"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Histórico de Solicitações
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acompanhe todas as suas compras assistidas em um só lugar
            </p>
          </div>

          {/* Filtros */}
          <div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            data-aos="fade-up"
          >
            {[
              { id: 'all', label: 'Todos' },
              { id: 'processing', label: 'Em andamento' },
              { id: 'shipped', label: 'Enviados' },
              { id: 'completed', label: 'Concluídos' },
              { id: 'cancelled', label: 'Cancelados' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Lista de Solicitações */}
          <div className="space-y-4">
            {filteredRequests.length === 0 ? (
              <div 
                className="text-center py-12"
                data-aos="fade-up"
              >
                <p className="text-gray-500">Nenhuma solicitação encontrada</p>
              </div>
            ) : (
              filteredRequests.map((request, index) => (
                <div
                  key={request.id}
                  className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:border-blue-300 ${
                    request.status === 'completed' ? 'opacity-90 hover:opacity-100' : ''
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  onClick={() => router.push(`/pages/request/${request.id}`)}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 pt-1">
                          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                            <ShoppingBagIcon className="h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-1">
                            {request.product}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <span>#{request.id.substring(0,7)}</span>
                            <span>•</span>
                            <span>{request.date}</span>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                              {request.status === 'completed' && 'Concluído'}
                              {request.status === 'processing' && 'Em andamento'}
                              {request.status === 'cancelled' && 'Cancelado'}
                              {request.status === 'shipped' && 'Enviado'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                         (AKZ) Valor em negociação
                        </p>
                        <button 
                          onClick={() => router.push(`/request/${request.id}`)}
                          className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-500 transition-colors"
                        >
                          Ver detalhes
                          <ArrowRightIcon className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-2 text-sm">
                          {getStatusIcon(request.status)}
                          <span className="text-gray-600">{request.lastUpdate}</span>
                        </div>

                        {request.trackingCode && (
                          <div className="flex items-center space-x-2 text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                            <TruckIcon className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-700">Código de rastreio:</span>
                            <span className="font-medium">brevemente</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {request.status === 'shipped' && (
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></div>
                          <span className="text-sm font-medium text-gray-700">Sua encomenda está a caminho</span>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
                          Acompanhar entrega
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Rodapé da Lista */}
          {filteredRequests.length > 0 && (
            <div 
              className="mt-8 text-center"
              data-aos="fade-up"
            >
              <p className="text-sm text-gray-500">
                Mostrando {filteredRequests.length} de {requests.length} solicitações
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}