import React from 'react';
import { createStudent } from '../api/protectedApi';
import ReusableForm from '../components/ReusableForm';

const CreateStudent = () => {
  const fields = [
    { name: 'studentId', label: 'Student ID' },
    { name: 'fullName', label: 'Name' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phoneNo', label: 'Phone No', type: 'tel' },
    { name: "rollNo", label: "Roll No" },
    { name: "regNo", label: "Reg. No" },
    { name: 'dept', label: 'Department' },
    { name: 'startYear', label: 'Start year' },
    { name: "endYear", label: "End Year" },
    { name: 'batchNo', label: 'Batch' },
    { name: 'groupNo', label: 'Group' },


    // { name: 'firstName', label: 'First Name', placeholder: 'Enter first name' },
    // { name: 'lastName', label: 'Last Name', placeholder: 'Enter last name' },
    // { name: 'email', label: 'Email', placeholder: 'Enter email', type: 'email' },
    // { name: 'phone', label: 'Phone', placeholder: 'Enter phone number', type: 'tel' },
  ];

  async function handleSubmit(formData) {
    try {
      await createStudent(formData);
      navigate('/admin');
    } catch (error) {
      console.error('Failed to create teacher:', error);
    }
  };

  return (
    <ReusableForm
      title="Create Student"
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateStudent;
