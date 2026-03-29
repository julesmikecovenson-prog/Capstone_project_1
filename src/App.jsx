import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { employeesData } from './data/employeesData';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(employeesData);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🏢 Gestion des Employés</h1>
          <p>RH Dashboard - Gérez votre équipe efficacement</p>
        </div>
      </header>

      <main className="app-main">
        <EmployeeForm onAddEmployee={handleAddEmployee} />
        <EmployeeList employees={employees} />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 RH Management System. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;