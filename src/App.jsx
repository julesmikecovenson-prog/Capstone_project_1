import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

export default function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice Dupont", position: "Développeuse", department: "IT", status: "Actif" },
    { id: 2, name: "Marc Tremblay", position: "Designer", department: "Création", status: "Inactif" }
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { id: Date.now(), ...newEmployee, status: "Actif" }]);
  };

  return (
    <div className="container">
      <h1>Gestion des employés</h1>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}
