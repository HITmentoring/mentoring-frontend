// src/components/TeacherLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherLogin = () => {

    function parseJwt (token) {
        console.log(token);
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const apiEndpoint = 'http://localhost:3000/auth/teacher';
    const payload = { employeeId, password };

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) =>{
        const data = await response.json()
        localStorage.setItem("userInfo", JSON.stringify(data));
        const userdata = parseJwt(localStorage.getItem('userInfo'));
        // console.log(userdata);
        if(response.ok){
            if(userdata.role && userdata.role == "admin"){
                navigate('/admin');
            }else if (userdata.role && userdata.role == "mentor"){
                navigate('/teacher');
            }
        }
        else {
          setError(data.message || 'Login failed. Please try again.');
        }
        
        // Handle successful login here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Employee ID</label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
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

export default TeacherLogin;
