import React from 'react';
import ReusableForm from '../components/ReusableForm';

const CreateStudent = () => {
  const fields = [
    { name: 'firstName', label: 'First Name', placeholder: 'Enter first name' },
    { name: 'lastName', label: 'Last Name', placeholder: 'Enter last name' },
    { name: 'email', label: 'Email', placeholder: 'Enter email', type: 'email' },
    { name: 'phone', label: 'Phone', placeholder: 'Enter phone number', type: 'tel' },
  ];

  const handleSubmit = (formData) => {
    console.log('Creating student with data:', formData);
    // Perform create student operation
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
