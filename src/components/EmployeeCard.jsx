export default function EmployeeCard({ employee }) {
  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <p>Poste : {employee.position}</p>
      <p>Département : {employee.department}</p>
      <p>Status : {employee.status}</p>
    </div>
  );
}
