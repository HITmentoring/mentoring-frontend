import { useLocation, useNavigate } from 'react-router-dom';
import { updateTeacher } from '../api/protectedApi';
import ReusableForm from '../components/ReusableForm';

function TeacherEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;
  const fields = [
    { name: 'empId', label: 'Employee ID' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'fullName', label: 'Name' },
    { name: 'phoneNo', label: 'Phone No', type: 'tel' },
    { name: 'dept', label: 'Department' },
    { name: 'ofYear', label: 'year' },
    { name: 'ofBatch', label: 'Batch' },
    { name: 'ofGroup', label: 'Group' }
  ];

  async function handleSubmit(formData) {
    try {
      await updateTeacher(userData._id, formData);
      navigate('/admin')
    } catch (error) {
      console.error('Failed to update teacher:', error);
    }
  }

  console.log(userData);
  return (
    <ReusableForm title="Teaacher Details" fields={fields} initialValues={userData} onSubmit={handleSubmit} />
  )
}

export default TeacherEdit