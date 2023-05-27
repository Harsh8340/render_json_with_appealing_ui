<!DOCTYPE html>
<html>
<head>
  <title>Employee Directory</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #c6ddec;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
      color: #333333;
    }
    
    label {
      font-weight: bold;
    }
    
    input[type="text"],
    select {
      margin-bottom: 10px;
      width: 100%;
      padding: 8px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background-color: #fff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    th,
    td {
      padding: 10px;
      text-align: left;
    }
    
    thead {
      background-color: #333;
      color: #fff;
    }
    
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    
    /* Additional Styles */
    
    #search {
      border: 1px solid #211f1f;
      border-radius: 4px;
    }
    
    #designation,
    #skills {
      border: 1px solid #0c0b0b;
      border-radius: 4px;
    }
    
    #employeesTable {
      font-size: 14px;
    }
    
    #employeesTable th,
    #employeesTable td {
      border-bottom: 1px solid #ddd;
    }
    
    #employeesTable th {
      text-transform: uppercase;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Employee Directory</h1>
  
  <label for="search">Search by Name:</label>
  <input type="text" id="search" oninput="filterEmployees()" placeholder="Enter name...">
  
  <label for="designation">Filter by Designation:</label>
  <select id="designation" onchange="filterEmployees()">
    <option value="">All</option>
    <option value="Senior Developer">Senior Developer</option>
    <option value="QA Engineer">QA Engineer</option>
    <option value="Project Manager">Project Manager</option>
  </select>
  
  <label for="skills">Filter by Skills:</label>
  <select id="skills" onchange="filterEmployees()">
    <option value="">All</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Java">Java</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="Photoshop">Photoshop</option>
    <option value="Manual Testing">Manual Testing</option>
    <option value="SQL">SQL</option>
  </select>
  
  <table id="employeesTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Designation</th>
