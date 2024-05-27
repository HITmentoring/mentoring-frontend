import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Admin from './AdminPage';
import CreateStudent from './CreateStudent';
import Home from './Home';
import Login from './Login';
import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';

const PageRoutes = () => {
  const { isLoggedIn, loading } = useAuthContext();

  return (
    loading ? <div>Loading...</div> :
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/student" exact element={isLoggedIn ? <StudentPage /> : <Navigate to="/" />} />
          <Route path="/teacher" exact element={isLoggedIn ? <TeacherPage /> : <Navigate to="/" />} />
          <Route path="/admin" exact element={isLoggedIn ? <Admin /> : <Navigate to="/" />} />
          <Route path="/teacher/createstudent" exact element={isLoggedIn? <CreateStudent/> : <Navigate to = "/"/>} />
        </Routes>
      </>
  )

}
export default PageRoutes;