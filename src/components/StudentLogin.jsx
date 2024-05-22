// src/components/StudentLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiEndpoint = 'http://localhost:3000/auth/student';
    const payload = { studentId, password };

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('userinfo', JSON.stringify(data.token));
          navigate('/student');
        } else {
          setError(data.message || 'Login failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Student ID</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Login
      </button>
    </form>
  );
};

export default StudentLogin;
