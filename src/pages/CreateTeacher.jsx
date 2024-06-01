import { useNavigate } from 'react-router-dom';
import { createTeacher } from '../api/protectedApi';
import ReusableForm from '../components/ReusableForm';

function CreateTeacher() {
  const navigate = useNavigate();
  const fields = [
    { name: 'empId', label: 'Employee ID' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'fullName', label: 'Name' },
    { name: 'dept', label: 'Department' },
    { name: 'ofYear', label: 'Year' },
    { name: 'ofBatch', label: 'Batch' },
    { name: 'ofGroup', label: 'Group' }
  ];

  async function handleSubmit(formData) {
    try {
      await createTeacher(formData);
      navigate('/admin');
    } catch (error) {
      console.error('Failed to create teacher:', error);
    }
  }

  return (
    <ReusableForm title="Create Teacher" fields={fields} onSubmit={handleSubmit} />
  );
}

export default CreateTeacher;
