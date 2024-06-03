import { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [role, setRole] = useState('teacher');

  return (
    <div className="bg-[#f7f3f3] min-h-screen flex flex-col">
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          {role === 'student' ? <LoginForm role={role} userFieldId="Student ID" /> : <LoginForm role={role} userFieldId="Employee ID" />}
        </div>
      </div>
    </div>
  );
}

export default Login;
