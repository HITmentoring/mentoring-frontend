import { useEffect, useState } from 'react';
import { deleteStudent, getAllStudents } from '../api/protectedApi';
import Table from '../components/Table';

const TeacherPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getAllStudents();
        setStudents(response.data);
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [])

  const columns = ["studentId", "fullName", "email", "phoneNo", "rollNo", "regNo", "dept", "startYear", "endYear", "batchNo", "groupNo"];

  async function handleDelete(student) {
    try {
      await deleteStudent(student._id);
      setStudents((prev) => prev.filter(t => t._id !== student._id));
    } catch (error) {
      console.error('Failed to delete teacher:', error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students List</h1>
      {loading ? <p>Loading...</p> : <Table from="teacher" to="student" columns={columns} rows={students} onDelete={handleDelete} />}
    </div>
  );
};

export default TeacherPage;
