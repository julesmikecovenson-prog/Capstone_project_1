import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  const getStatusClass = () => {
    return employee.status === 'active' ? 'status-active' : 'status-inactive';
  };

  const getStatusText = () => {
    return employee.status === 'active' ? 'Actif' : 'Inactif';
  };

  const getDepartmentIcon = () => {
    const icons = {
      'IT': '💻',
      'Management': '📊',
      'Design': '🎨',
      'RH': '👥',
      'Data': '📈'
    };
    return icons[employee.department] || '👤';
  };

  return (
    <div className="employee-card">
      <div className="employee-avatar">
        <span className="avatar-icon">{getDepartmentIcon()}</span>
      </div>
      <div className="employee-info">
        <h3 className="employee-name">{employee.name}</h3>
        <p className="employee-position">{employee.position}</p>
        <div className="employee-details">
          <span className="employee-department">
            {getDepartmentIcon()} {employee.department}
          </span>
          <span className={`employee-status ${getStatusClass()}`}>
            <span className="status-dot"></span>
            {getStatusText()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;