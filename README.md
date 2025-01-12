# School Payment Dashboard

A modern, responsive dashboard for managing school payment transactions built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 **Transaction Dashboard**
  - View all transactions in a paginated table
  - Filter transactions by status (Success, Pending, Failed)
  - Date range filtering
  - Real-time search functionality
  - Sortable columns

- 🏫 **School-specific Transactions**
  - Search transactions by school ID
  - View detailed transaction history for specific schools

- 🔍 **Transaction Status Check**
  - Quick status lookup using order ID
  - Detailed transaction information display
  - Real-time status updates

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Table Management**: TanStack Table (React Table)
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd school-payment-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=your_api_base_url
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DateRangeFilter.tsx
│   ├── StatusFilter.tsx
│   └── TransactionTable.tsx
├── pages/              # Page components
│   ├── Dashboard.tsx
│   ├── SchoolTransactions.tsx
│   └── StatusCheck.tsx
├── services/           # API services
│   └── api.ts
├── types/              # TypeScript type definitions
│   └── transaction.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## API Integration

The dashboard integrates with the following API endpoints:

- `GET /transactions` - Fetch all transactions
- `GET /transactions/school/:schoolId` - Fetch school-specific transactions
- `GET /transactions/status/:orderId` - Check transaction status

## Features in Detail

### Transaction Dashboard
- Displays a comprehensive list of all transactions
- Advanced filtering capabilities:
  - Status-based filtering (Success/Pending/Failed)
  - Date range selection
  - Global search across all fields
- Sortable columns for better data organization
- Pagination with customizable page size

### School Transactions
- Dedicated view for school-specific transactions
- School ID search functionality
- Filtered transaction history display

### Status Check
- Quick transaction lookup using order ID
- Detailed transaction information display
- Status indicators with color coding

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
