import { Route, Routes } from 'react-router-dom';
import Admin from './pages/AdminPage';
import Home from './pages/Home';
import Login from './pages/Login';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';


export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/student" exact element={<StudentPage />} />
    <Route path="/teacher" exact element={<TeacherPage />} />
    <Route path="/admin" exact element={<Admin />} />



    </Routes>
    </>
  )
}