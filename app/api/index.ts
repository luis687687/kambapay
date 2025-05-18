// services/apiConfig.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.kambapay.com/v1';

interface ApiConfig {
  baseUrl: string;
  defaultHeaders: HeadersInit;
}

export const apiConfig: ApiConfig = {
  baseUrl: API_BASE_URL,
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
};

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Erro na requisição');
  }
  return response.json();
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${apiConfig.baseUrl}${endpoint}`;
  const headers = {
    ...apiConfig.defaultHeaders,
    ...options.headers,
  };

  // Adiciona token de autenticação se existir
  const token = localStorage.getItem('authToken');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    return await handleResponse<T>(response);
  } catch (error) {
    if (error instanceof Error && error.message.includes('401')) {
      // Token inválido ou expirado
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    throw error;
  }
}