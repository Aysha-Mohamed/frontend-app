import React, { useEffect, useState } from 'react';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    try {
    // const response = await fetch('http://localhost:3010/api/employees');
    const response = await fetch('https://backend-api-test-03efce4e03f9.herokuapp.com/api/employees');
      const data = await response.json();
      setEmployees(data); // Update the state with fetched employee data
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Fetching Data from Backend !!!</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            Name: {employee.name}, Email: {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
