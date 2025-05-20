'use client';

import axios from 'axios';
import Cookies from 'js-cookie';
import { LoginCredentials, LoginResponse, Post, DashboardData, BlogSettings } from './types';

let accessToken: string | null = null;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  withCredentials: true,
});

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post<LoginResponse>('/api/auth/login', credentials);
    accessToken = response.data.access_token;
    return response.data;
  },

  logout: () => {
    accessToken = null;
    Cookies.remove('user');
  },

  checkSession: async () => {
    try {
      const response = await api.get<{ access_token: string }>('/api/auth/check-session');
      accessToken = response.data.access_token;
      return true;
    } catch (error) {
      console.error('Error checking session:', error);
      accessToken = null;
      return false;
    }
  }
};

// Crear un nuevo cliente axios para las llamadas al backend
const backendApi = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

// Interceptor para agregar el token a las peticiones al backend
backendApi.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export const blogApi = {
  getPosts: async (includeAll = false) => {
    const response = await backendApi.get<Post[]>(`/blog${includeAll ? '?all=true' : ''}`);
    return response.data;
  },

  getPost: async (id: string) => {
    const response = await backendApi.get<Post>(`/blog/${id}`);
    return response.data;
  },

  createPost: async (post: Omit<Post, 'id' | 'slug' | 'createdAt' | 'updatedAt' | 'authorId' | 'author'>) => {
    const response = await backendApi.post<Post>('/blog', post);
    return response.data;
  },

  updatePost: async (id: string, post: Partial<Post>) => {
    const response = await backendApi.put<Post>(`/blog/${id}`, post);
    return response.data;
  },

  deletePost: async (id: string) => {
    await backendApi.delete(`/blog/${id}`);
  },
};

export const dashboardApi = {
  getDashboardData: async (): Promise<DashboardData> => {
    const response = await backendApi.get<DashboardData>('/dashboard');
    return response.data;
  },

  getBlogSettings: async (): Promise<BlogSettings> => {
    const response = await backendApi.get<BlogSettings>('/dashboard/settings');
    return response.data;
  },

  saveBlogSettings: async (settings: BlogSettings): Promise<void> => {
    await backendApi.put('/dashboard/settings', settings);
  }
}; 