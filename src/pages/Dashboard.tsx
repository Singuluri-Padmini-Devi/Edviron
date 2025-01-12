import React, { useState, useEffect } from 'react';
import { TransactionTable } from '../components/TransactionTable';
import { StatusFilter } from '../components/StatusFilter';
import { DateRangeFilter } from '../components/DateRangeFilter';
import { getTransactions } from '../services/api';
import type { Transaction } from '../types/transaction';

export function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch transactions');
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    let matches = true;

    if (statusFilter && transaction.status !== statusFilter) {
      matches = false;
    }

    if (startDate && transaction.created_at && new Date(transaction.created_at) < new Date(startDate)) {
      matches = false;
    }

    if (endDate && transaction.created_at && new Date(transaction.created_at) > new Date(endDate)) {
      matches = false;
    }

    return matches;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Transactions Dashboard</h1>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        <DateRangeFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <TransactionTable data={filteredTransactions} isLoading={isLoading} />
    </div>
  );
}