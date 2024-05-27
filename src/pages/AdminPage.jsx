// src/pages/AdminPage.js
import React from 'react';
import Table from '../components/Table';

const AdminPage = () => {
  const columns = ['Name', 'Email', 'Department'];
  const rows = [
    { Name: 'John Doe', Email: 'john@example.com', Department: 'Math' },
    { Name: 'Jane Smith', Email: 'jane@example.com', Department: 'Science' },
    // Add more rows as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher List</h1>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default AdminPage;
