import axios from 'axios';
import type { Transaction } from '../types/transaction';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTransactions = async () => {
  const response = await api.get<Transaction[]>('/transactions');
  return response.data;
};

export const getTransactionsBySchool = async (schoolId: string) => {
  const response = await api.get<Transaction[]>(`/transactions/school/${schoolId}`);
  return response.data;
};

export const checkTransactionStatus = async (customOrderId: string) => {
  const response = await api.get<Transaction>(`/transactions/status/${customOrderId}`);
  return response.data;
};