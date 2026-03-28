import React from 'react';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  const activeCount = employees.filter(emp => emp.status === 'active').length;
  const inactiveCount = employees.filter(emp => emp.status === 'inactive').length;

  if (employees.length === 0) {
    return (
      <div className="employee-list-empty">
        <div className="empty-state">
          <span className="empty-icon">👥</span>
          <h3>Aucun employé</h3>
          <p>Ajoutez votre premier employé avec le formulaire ci-dessus</p>
        </div>
      </div>
    );
  }

  return (
    <div className="employee-list">
      <div className="employee-list-header">
        <h2>👥 Liste des Employés</h2>
        <div className="stats">
          <div className="stat-badge active">
            <span className="stat-count">{activeCount}</span>
            <span className="stat-label">Actifs</span>
          </div>
          <div className="stat-badge inactive">
            <span className="stat-count">{inactiveCount}</span>
            <span className="stat-label">Inactifs</span>
          </div>
          <div className="stat-badge total">
            <span className="stat-count">{employees.length}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>
      </div>
      <div className="employee-grid">
        {employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;