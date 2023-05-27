// Sample employee data
const employeesData = {
    "employees": [
      {
        "id": 1,
        "name": "Mr. A",
        "designation": "Senior Developer",
        "skills": ["JavaScript", "Python", "Java"],
        "email": "mra@example.com", // Additional field
        "phone": "1234567890" // Additional field
      },
      // Add other employee objects here
    ]
  };
  
  // Function to filter employees based on search input and filters
  function filterEmployees() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const designationFilter = document.getElementById('designation').value;
    const skillsFilter = document.getElementById('skills').value;
  
    const filteredEmployees = employeesData.employees.filter(employee => {
      const nameMatch = employee.name.toLowerCase().includes(searchInput);
      const designationMatch = designationFilter === '' || employee.designation === designationFilter;
      const skillsMatch = skillsFilter === '' || employee.skills.includes(skillsFilter);
      return nameMatch && designationMatch && skillsMatch;
    });
  
    displayEmployees(filteredEmployees);
  }
  
  // Function to display filtered employees in the table
  function displayEmployees(employees) {
    const employeesBody = document.getElementById('employeesBody');
    employeesBody.innerHTML = '';
  
    employees.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.designation}</td>
        <td>${employee.skills.join(', ')}</td>
        <td>${employee.email}</td> // Add a new <td> for email
        <td>${employee.phone}</td> // Add a new <td> for phone
      `;
      employeesBody.appendChild(row);
    });
  }
  
  // Initial display of all employees
  displayEmployees(employeesData.employees);
  