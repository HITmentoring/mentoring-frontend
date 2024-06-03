import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Admin from './AdminPage';
import CreateStudent from './CreateStudent';
import CreateTeacher from './CreateTeacher';
import Home from './Home';
import Login from './Login';
import StudentEdit from './StudentEditPage';
import StudentPage from './StudentPage';
import TeacherEdit from './TeacherEditPage';
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

          <Route path="/admin" exact element={isLoggedIn ? <Admin /> : <Navigate to="/" />} />
          <Route path="/admin/create-teacher" exact element={isLoggedIn ? <CreateTeacher /> : <Navigate to="/" />} />
          <Route path='/admin/edit-teacher' exact element={isLoggedIn ? <TeacherEdit /> : <Navigate to="/" />} />

          <Route path="/teacher" exact element={isLoggedIn ? <TeacherPage /> : <Navigate to="/" />} />
          <Route path="/teacher/create-student" exact element={isLoggedIn ? <CreateStudent /> : <Navigate to="/" />} />
          <Route path='/teacher/edit-student' exact element={isLoggedIn ? <StudentEdit /> : <Navigate to="/" />} />
        </Routes>
      </>
  )

}
export default PageRoutes;