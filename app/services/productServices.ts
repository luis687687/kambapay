// services/productServices.ts
import { apiFetch } from './api/apiConfig'; // Ajuste o caminho conforme necessário
import {
  Product,
  ProductSearchParams,
  ProductReview,
  PaginatedResponse,
  Category,
} from './types/product.types';

export const ProductService = {
  // Busca e listagem
  async searchProducts(params: ProductSearchParams): Promise<PaginatedResponse<Product>> {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        query.append(key, String(value));
      }
    });

    return apiFetch<PaginatedResponse<Product>>(`/products/search?${query.toString()}`);
  },

  async getFeaturedProducts(): Promise<Product[]> {
    return apiFetch<Product[]>('/products/featured');
  },

  async getProductById(id: string): Promise<Product> {
    return apiFetch<Product>(`/products/${id}`);
  },

  async getRelatedProducts(productId: string): Promise<Product[]> {
    return apiFetch<Product[]>(`/products/${productId}/related`);
  },

  // Categorias
  async getCategories(): Promise<Category[]> {
    return apiFetch<Category[]>('/products/categories');
  },

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return apiFetch<Product[]>(`/products/categories/${categoryId}`);
  },

  // Avaliações
  async getProductReviews(productId: string): Promise<ProductReview[]> {
    return apiFetch<ProductReview[]>(`/products/${productId}/reviews`);
  },

  async createProductReview(
    productId: string,
    payload: { rating: number; comment?: string }
  ): Promise<ProductReview> {
    return apiFetch<ProductReview>(`/products/${productId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  // Favoritos
  async getFavoriteProducts(): Promise<Product[]> {
    return apiFetch<Product[]>('/users/me/favorites');
  },

  async addFavoriteProduct(productId: string): Promise<void> {
    return apiFetch<void>(`/users/me/favorites/${productId}`, {
      method: 'POST',
    });
  },

  async removeFavoriteProduct(productId: string): Promise<void> {
    return apiFetch<void>(`/users/me/favorites/${productId}`, {
      method: 'DELETE',
    });
  },

  // Histórico de visualização
  async getRecentlyViewed(): Promise<Product[]> {
    return apiFetch<Product[]>('/users/me/recently-viewed');
  },

  async trackProductView(productId: string): Promise<void> {
    return apiFetch<void>(`/users/me/recently-viewed/${productId}`, {
      method: 'POST',
    });
  },
};