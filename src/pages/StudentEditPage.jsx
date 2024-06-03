import { useLocation, useNavigate } from 'react-router-dom';
import { updateStudent } from '../api/protectedApi';
import ReusableForm from '../components/ReusableForm';

function StudentEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;
  const fields = [
    { name: 'studentId', label: 'Student ID' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'fullName', label: 'Name' },
    { name: 'phoneNo', label: 'Phone No', type: 'tel' },
    { name: "rollNo", label: "Roll No" },
    { name: "regNo", label: "Reg. No" },
    { name: 'dept', label: 'Department' },
    { name: 'startYear', label: 'Start year' },
    { name: "endYear", label: "End Year" },
    { name: 'batchNo', label: 'Batch' },
    { name: 'groupNo', label: 'Group' }
  ];

  async function handleSubmit(formData) {
    try {
      await updateStudent(userData._id, formData);
      navigate('/teacher')
    } catch (error) {
      console.error('Failed to update teacher:', error);
    }
  }

  console.log(userData);
  return (
    <ReusableForm title="Student Details" fields={fields} initialValues={userData} onSubmit={handleSubmit} />
  )
}

export default StudentEdit