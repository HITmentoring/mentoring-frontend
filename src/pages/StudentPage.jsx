/* eslint-disable react/prop-types */
// src/components/StudentDetails.js
import { useState } from 'react';

const StudentDetails = () => {
    const student = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        department: 'Computer Science',
        year: '3rd Year',
        dob: '2000-01-01',
        phone: '123-456-7890',
      };
  const [certificates, setCertificates] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setCertificates([...certificates, ...uploadedFiles]);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <p className="p-2 border rounded bg-gray-100">{student.name}</p>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <p className="p-2 border rounded bg-gray-100">{student.email}</p>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Department</label>
          <p className="p-2 border rounded bg-gray-100">{student.department}</p>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Year</label>
          <p className="p-2 border rounded bg-gray-100">{student.year}</p>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Date of Birth</label>
          <p className="p-2 border rounded bg-gray-100">{student.dob}</p>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <p className="p-2 border rounded bg-gray-100">{student.phone}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Certificates</h3>
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer focus:outline-none"
        />
        <ul className="mt-4">
          {certificates.map((file, index) => (
            <li key={index} className="text-sm text-gray-700">
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDetails;
