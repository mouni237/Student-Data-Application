function StudentCard({ student }) {
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>User: {student.username}</p>
      <p>Email: {student.email}</p>
      <p>Address: {student.address?.city}</p>

      
    </div>
  );
}

export default StudentCard;
