import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: ''
  });

  const [errors, setErrors] = useState({});

  const departments = ['IT', 'Management', 'Design', 'RH', 'Data'];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    if (!formData.position.trim()) {
      newErrors.position = 'Le poste est requis';
    }
    if (!formData.department) {
      newErrors.department = 'Le département est requis';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newEmployee = {
        id: Date.now(),
        name: formData.name.trim(),
        position: formData.position.trim(),
        department: formData.department,
        status: 'active' // Default status
      };
      
      onAddEmployee(newEmployee);
      
      setFormData({
        name: '',
        position: '',
        department: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="employee-form-container">
      <h2>➕ Ajouter un Employé</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="position">Poste *</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Développeur Frontend"
            className={errors.position ? 'error' : ''}
          />
          {errors.position && <span className="error-message">{errors.position}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="department">Département *</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={errors.department ? 'error' : ''}
          >
            <option value="">Sélectionner un département</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          {errors.department && <span className="error-message">{errors.department}</span>}
        </div>

        <button type="submit" className="submit-btn">
          <span>➕</span> Ajouter l'employé
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;