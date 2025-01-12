import React, { useState } from 'react';
import { checkTransactionStatus } from '../services/api';
import type { Transaction } from '../types/transaction';

export function StatusCheck() {
  const [orderId, setOrderId] = useState('');
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    if (!orderId) return;

    setIsLoading(true);
    setError('');
    try {
      const data = await checkTransactionStatus(orderId);
      setTransaction(data);
    } catch (error) {
      console.error('Failed to check transaction status:', error);
      setError('Failed to find transaction. Please check the Order ID and try again.');
      setTransaction(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Check Transaction Status</h1>
      
      <div className="max-w-md mx-auto">
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            className="p-2 border rounded flex-grow"
          />
          <button
            onClick={handleCheck}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Checking...' : 'Check'}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
            {error}
          </div>
        )}

        {transaction && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Transaction Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      transaction.status === 'Success'
                        ? 'bg-green-100 text-green-800'
                        : transaction.status === 'Failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Order Amount</dt>
                <dd className="mt-1">₹{transaction.order_amount.toFixed(2)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Transaction Amount</dt>
                <dd className="mt-1">₹{transaction.transaction_amount.toFixed(2)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Gateway</dt>
                <dd className="mt-1">{transaction.gateway}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">School ID</dt>
                <dd className="mt-1">{transaction.school_id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Collect ID</dt>
                <dd className="mt-1">{transaction.collect_id}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}