// pages/request-success.tsx
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function RequestSuccess() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-md w-full text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckCircleIcon className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          Solicitação Enviada!
        </h2>
        <p className="mt-2 text-gray-600">
          Recebemos sua solicitação de compra. Nossa equipe entrará em contato em até 24 horas para confirmar os detalhes.
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Acompanhar solicitações
          </Link>
        </div>
      </div>
    </div>
  );
}