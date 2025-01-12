import React, { useState, useEffect } from 'react';
import { TransactionTable } from '../components/TransactionTable';
import { getTransactionsBySchool } from '../services/api';
import type { Transaction } from '../types/transaction';

export function SchoolTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [schoolId, setSchoolId] = useState('');

  const handleSchoolSearch = async () => {
    if (!schoolId) return;

    setIsLoading(true);
    try {
      const data = await getTransactionsBySchool(schoolId);
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch school transactions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">School Transactions</h1>
      
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          value={schoolId}
          onChange={(e) => setSchoolId(e.target.value)}
          placeholder="Enter School ID"
          className="p-2 border rounded flex-grow max-w-sm"
        />
        <button
          onClick={handleSchoolSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {transactions.length > 0 && (
        <TransactionTable data={transactions} isLoading={isLoading} />
      )}
    </div>
  );
}