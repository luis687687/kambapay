"use client"
// pages/request/[id].tsx
import { useParams } from 'next/navigation';
import { 
  ArrowLeftIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  TruckIcon,
  CreditCardIcon,
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import Head from 'next/head';
import { getRequestById, IDelivery, IRequestWithDeliveries } from '@/app/services/requestServices';
import { useEffect, useState } from 'react';


type TimelineEvent = {
  id: string;
  date: string;
  status: string;
  description: string;
  isCurrent?: boolean;
};

type RequestDetail = {
  id: string;
  product: string;
  description: string;
  productLink?: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  price: string;
  installments: string;
  paymentMethod: string;
  trackingCode?: string;
  assistant: {
    name: string;
    contact: string;
  };
  deliveryAddress: string;
  timeline: TimelineEvent[];
};

export default function RequestDetailPage() {
  const path = useParams();
  const { id } = path;
  const [details, setDetails] = useState<RequestDetail | null>(null);
  // Dados mockados - na prática viria de uma API
  // const request: RequestDetail = {
  //   id: id as string || 'RQ-78945',
  //   product: 'iPhone 15 Pro 256GB - Azul',
  //   description: 'Novo iPhone 15 Pro na cor azul, com 256GB de armazenamento. Preferência por versão desbloqueada e selo da Apple intacto.',
  //   productLink: 'https://www.apple.com/iphone-15-pro',
  //   status: 'shipped',
  //   createdAt: '15/05/2023 às 14:30',
  //   updatedAt: '20/05/2023 às 15:45',
  //   price: 'R$ 5.799,00',
  //   installments: '3x de R$ 1.933,00',
  //   paymentMethod: 'Cartão de Crédito - Mastercard',
  //   trackingCode: 'AB123456789BR',
  //   assistant: {
  //     name: 'Ana Silva',
  //     contact: 'ana.silva@buyassist.com'
  //   },
  //   deliveryAddress: 'Av. Paulista, 1000, Apto 123 - São Paulo/SP - CEP: 01310-100',
  //   timeline: [
  //     {
  //       id: '1',
  //       date: '20/05/2023 15:45',
  //       status: 'Enviado',
  //       description: 'Produto despachado pelo vendedor. Código de rastreio: AB123456789BR',
  //       isCurrent: true
  //     },
  //     {
  //       id: '2',
  //       date: '18/05/2023 11:20',
  //       status: 'Pagamento confirmado',
  //       description: 'Transação aprovada pelo banco emissor'
  //     },
  //     {
  //       id: '3',
  //       date: '16/05/2023 09:15',
  //       status: 'Em negociação',
  //       description: 'Assistente encontrou o produto por R$ 5.799,00'
  //     },
  //     {
  //       id: '4',
  //       date: '15/05/2023 14:30',
  //       status: 'Solicitação criada',
  //       description: 'Pedido registrado no sistema'
  //     }
  //   ]
  // };




  const getStatusIcon = () => {
    switch (details?.status) {
      case 'processing':
        return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <TruckIcon className="h-5 w-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (details?.status) {
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };


  useEffect(() => {
    async function load() {
      const data: IRequestWithDeliveries = await getRequestById(id as string  );
      const { request, delivery } = data;

      
      // Converte status numérico para string
      const statusMap: Record<number, RequestDetail["status"]> = {
        0: "processing",
        1: "shipped",
        2: "delivered",
        3: "cancelled",
      };

      // Monta timeline básica
      const timeline: TimelineEvent[] =   [
            {
              id: '1',
              date: '20/05/2023 15:45',
              status: 'Enviado',
              description: 'Produto despachado pelo vendedor',
              isCurrent: true
            },
            {
              id: '2',
              date: '18/05/2023 11:20',
              status: 'Pagamento confirmado',
              description: 'Transação aprovada pelo banco emissor'
            },
            {
              id: '3',
              date: '16/05/2023 09:15',
              status: 'Em negociação',
              description: 'Assistente encontrou o produto'
            },
            {
              id: '4',
              date: request.created_at,
              status: 'Solicitação criada',
              description: 'Pedido registrado no sistema'
            }
          ]

   

      setDetails({
        id: request.id || "—", // ID da requisição
        product: request.description,            // usa a descrição como título
        description: delivery?.obs || "—", // sem info no modelo; preencha depois
        productLink: request.link,
        status: statusMap[request.status] ?? "processing",
        createdAt: request.created_at,
        updatedAt: request.updated_at,
        price: "Em negociação",                               // não existe preço no modelo, preencha depois
        installments: String(request.prestations),
        paymentMethod: "Cartão de Crédito",       // placeholder; ajuste se tiver esse dado
        trackingCode: request.tracking_url || undefined,
        assistant: {
          name: "Luis Domingos Marques",                              // sem info no modelo; preencha depois
          contact: "luismarque687@gmail.com",
        },
        deliveryAddress: delivery?.addres ?? "—",
        timeline,
      });
    }

    load();
  }, [id]);

  if (!details) return <div>Carregando…</div>;

  return (
    <>
      <Head>
        <title>Solicitação #{details?.id} - buyAssist</title>
      </Head>

      <div className="min-h-screen ">
       

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Cabeçalho */}
          <div className="mb-8" data-aos="fade-down">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Solicitação #{details?.id}
              </h1>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
                {getStatusIcon()}
                <span className="ml-2">
                  {details?.status === 'processing' && 'Em processamento'}
                  {details?.status === 'shipped' && 'Enviado'}
                  {details?.status === 'delivered' && 'Entregue'}
                  {details?.status === 'cancelled' && 'Cancelado'}
                </span>
              </span>
            </div>
            <p className="text-gray-500">
              Criado em {details?.createdAt} • Atualizado em {details?.updatedAt}
            </p>
          </div>

          {/* Grid de Informações */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Card: Detalhes do Produto */}
            <div 
              className="bg-white rounded-xl border border-gray-200 p-6"
              data-aos="fade-up"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <ShoppingBagIcon className="h-5 w-5 text-blue-500 mr-2" />
                Detalhes do Produto
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{details?.product}</h3>
                  <p className="text-gray-600">{details?.description}</p>
                </div>
                
                {details?.productLink && (
                  <a 
                    href={details?.productLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Link do produto
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            </div>

            {/* Card: Informações de Pagamento */}
            <div 
              className="bg-white rounded-xl border border-gray-200 p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <CreditCardIcon className="h-5 w-5 text-blue-500 mr-2" />
                Informações de Pagamento
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Valor total:</span>
                  <span className="font-medium">{details?.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Parcelamento:</span>
                  <span className="font-medium">{details?.installments}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Método de pagamento:</span>
                  <span className="font-medium">{details?.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Card: Entrega */}
            <div 
              className="bg-white rounded-xl border border-gray-200 p-6"
              data-aos="fade-up"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <TruckIcon className="h-5 w-5 text-blue-500 mr-2" />
                Informações de Entrega
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 mb-1">Endereço:</p>
                  <p className="font-medium">{details?.deliveryAddress}</p>
                </div>
                {details?.trackingCode && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Código de rastreio:</span>
                    <span className="font-medium">{details?.trackingCode}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Card: Assistente */}
            <div 
              className="bg-white rounded-xl border border-gray-200 p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
                Assistente Responsável
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nome:</span>
                  <span className="font-medium">{details?.assistant.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contato:</span>
                  <a 
                    href={`mailto:${details?.assistant.contact}`}
                    className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    {details?.assistant.contact}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Linha do Tempo */}
          <div 
            className="bg-white rounded-xl border border-gray-200 p-6 mb-8"
            data-aos="fade-up"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
              <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
              Histórico de Atualizações
            </h2>
            <div className="space-y-6">
              {details?.timeline.map((event) => (
                <div 
                  key={event.id} 
                  className="flex"
                  data-aos="fade-up"
                  data-aos-delay={50 * parseInt(event.id)}
                >
                  <div className="flex flex-col items-center mr-4">
                    <div className={`w-3 h-3 rounded-full ${
                      event.isCurrent ? 'bg-blue-500 ring-4 ring-blue-200' : 'bg-gray-300'
                    }`}></div>
                    {event.id !== details?.timeline.length.toString() && (
                      <div className="w-px h-full bg-gray-200"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <p className="font-medium text-gray-900">{event.status}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </main>
      </div>
    </>
  );
}