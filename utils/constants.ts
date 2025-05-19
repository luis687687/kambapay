// utils/constants.ts
import { 
  HomeIcon, 
  PlusCircleIcon, 
  ClockIcon, 
  Cog6ToothIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export const APP_ROUTE = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
    auth: false
  },
  {
    name: "Solicitar",
    path: "/pages/request",
    icon: PlusCircleIcon,
    auth: true
  },
  {
    name: "Histórico",
    path: "/pages/history",
    icon: ClockIcon,
    auth: true
  },
  // Rotas adicionais podem ser descomentadas conforme necessidade
  // {
  //   name: "Configurações",
  //   path: "/settings",
  //   icon: Cog6ToothIcon,
  //   auth: true
  // },
  // {
  //   name: "Sobre",
  //   path: "/about",
  //   icon: InformationCircleIcon,
  //   auth: false
  // },
  // {
  //   name: "Contato",
  //   path: "/contact",
  //   icon: EnvelopeIcon,
  //   auth: false
  // },
  // {
  //   name: "Privacidade",
  //   path: "/privacy",
  //   icon: ShieldCheckIcon,
  //   auth: false
  // },
  // {
  //   name: "Termos",
  //   path: "/terms",
  //   icon: DocumentTextIcon,
  //   auth: false
  // }
] as const;

// Tipo para as rotas
export type AppRoute = typeof APP_ROUTE[number];