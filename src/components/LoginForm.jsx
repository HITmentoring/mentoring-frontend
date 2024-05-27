// src/components/TeacherLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localSigin } from '../api/commonApi';
import { useAuthContext } from '../hooks/useAuthContext';
import { parseJwt } from '../utils/authVerify';

const LoginForm = ({ role, userFieldId }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useAuthContext();

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (role === "student") {
        response = await localSigin('studentId', userId, password);
      } else if (role === "teacher") {
        response = await localSigin('empId', userId, password);
      }


      if (response.status === 200) {
        const { data } = response;
        localStorage.setItem("userinfo", JSON.stringify(data))

        dispatch({ type: "LOGIN", payload: data })

        const userData = parseJwt(data.token);
        if (userData.role) {
          const { role } = userData;
          if (role === "ADMIN") {
            navigate('/admin');
          } else if (role === "MENTOR") {
            navigate("/teacher")
          } else {
            navigate("/student");
          }
        }
      }
    } catch (error) {
      const errorResponse = error.response.data;
      setError(errorResponse.error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">{userFieldId}</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
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

export default LoginForm;
