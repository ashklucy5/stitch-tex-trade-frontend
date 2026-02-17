// lib/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async getProducts() {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  async getCategories() {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },

  async getProductById(id) {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

  async getProductsByCategory(categoryId) {
    const response = await fetch(`${API_URL}/products?category_id=${categoryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },
};