import Table from '../components/Table';

const TeacherPage = () => {
  const columns = ['Name', 'Email', 'Class'];
  const rows = [
    { Name: 'Alice Brown', Email: 'alice@example.com', Class: '10th Grade' },
    { Name: 'Bob Green', Email: 'bob@example.com', Class: '11th Grade' },
    // Add more rows as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Mentees</h1>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default TeacherPage;
