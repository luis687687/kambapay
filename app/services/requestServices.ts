// src/services/requestService.ts

import { apiFetch } from "./api";


export interface IRequest {
  id?: string;
  user_id: string;
  description: string;
  link?: string;
  tracking_url?: string;
  prestations: number;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface IDelivery {
  id?: string;
  request_id: string;
  phone: string;
  email: string;
  addres: string;
  obs?: string;
}

export interface ICombinedPayload {
  user_id: string;
  description: string;
  link?: string;
  tracking_url?: string;
  prestations?: number;
  status?: number;
  phone: string;
  email: string;
  address: string;
  obs?: string;
}


export interface IRequestWithDeliveries {
  request: IRequest;
  delivery: IDelivery;
}
/**
 * Cria uma requisição + entrega (rota POST /request)
 */
export async function createRequestWithDelivery(
  payload: ICombinedPayload
): Promise<{ request: IRequest; delivery: IDelivery }> {
  const response = await apiFetch("/request", {
    method: "post",
    body: JSON.stringify(payload),
  });
  return response as { request: IRequest; delivery: IDelivery };
}

/**
 * Busca uma requisição pelo ID (rota GET /request/:id)
 */
export async function getRequestById(
  requestId: string
): Promise<IRequestWithDeliveries> {
  console.log("requestId ", `/request/${requestId}`);
  const response = await apiFetch(`/request/${requestId}`, {
    method: "get",
  });
  console.log("response ", response);
  return response as IRequestWithDeliveries;
}

/**
 * Lista todas as requisições de um usuário (rota GET /requests/user/:userId)
 */
export async function listRequestsByUser(
  userId: string
): Promise<IRequest[]> {

  console.log("userId ", `/requests/user/${userId}`);

  const response = await apiFetch(`/requests/user/${userId}`, {
    method: "get",
  });
  return response as IRequest[];
}

export interface IRequestUpdatePayload {
  description?: string;
  link?: string;
  tracking_url?: string;
  prestations?: number;
  status?: number;
}

/**
 * Atualiza uma requisição (rota POST /request/update/:id com body JSON)
 */
export async function updateRequestById(
  requestId: string,
  updates: IRequestUpdatePayload
): Promise<IRequest> {
  const response = await apiFetch(`/request/update/${requestId}`, {
    method: "post",
    body: JSON.stringify(updates),
  });
  return response as IRequest;
}

export interface IDeliveryCreatePayload {
  request_id: string;
  phone: string;
  email: string;
  address: string;
  obs?: string;
}

/**
 * Cria uma entrega independente (rota POST /delivery)
 */
export async function createDelivery(
  payload: IDeliveryCreatePayload
): Promise<IDelivery> {
  const response = await apiFetch("/delivery", {
    method: "post",
    body: JSON.stringify(payload),
  });
  return response as IDelivery;
}

