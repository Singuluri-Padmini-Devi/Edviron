import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { SchoolTransactions } from './pages/SchoolTransactions';
import { StatusCheck } from './pages/StatusCheck';
import { LayoutGrid, School, Search } from 'lucide-react';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                  School Payments
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
                <Link
                  to="/school"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <School className="h-4 w-4 mr-2" />
                  School Transactions
                </Link>
                <Link
                  to="/status"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Check Status
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/school" element={<SchoolTransactions />} />
            <Route path="/status" element={<StatusCheck />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;