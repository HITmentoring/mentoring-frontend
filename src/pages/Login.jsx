import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import StudentLogin from '../components/StudentLogin';
import TeacherLogin from '../components/TeacherLogin';

const Login = () => {
  const [role, setRole] = useState('student');

  return (
    <div className="bg-[#f7f3f3] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">I am a</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          {role === 'student' ? <StudentLogin /> : <TeacherLogin />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
