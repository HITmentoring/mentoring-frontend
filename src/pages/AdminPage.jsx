// src/pages/AdminPage.js
import React, { useEffect, useState } from 'react';
import { deleteTeacher, getAllTeachers } from '../api/protectedApi';
import Table from '../components/Table';

const AdminPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await getAllTeachers();
        setTeachers(response.data);
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [])

  const columns = ['empId', , 'fullName', 'email', 'phoneNo', 'dept', 'ofYear', 'ofBatch', 'ofGroup'];

  async function handleDelete(teacher) {
    try {
      await deleteTeacher(teacher._id);
      setTeachers((prevTeachers) => prevTeachers.filter(t => t._id !== teacher._id));
    } catch (error) {
      console.error('Failed to delete teacher:', error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher List</h1>
      {
        loading ? <p>Loading...</p> : (<Table from="admin" to="teacher" columns={columns} rows={teachers} onDelete={handleDelete} />)
      }
    </div>
  );
};

export default AdminPage;
