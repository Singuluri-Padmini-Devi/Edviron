import React from 'react';

interface StatusFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="">All Statuses</option>
      <option value="Success">Success</option>
      <option value="Pending">Pending</option>
      <option value="Failed">Failed</option>
    </select>
  );
}