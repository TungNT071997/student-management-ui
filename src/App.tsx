import Side from './components/Dashboard/Side';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Student from './components/Pages/Student/Student';
import Teacher from './components/Pages/Teacher/Teacher';
import Courses from './components/Pages/Courses/Courses';
import AddNewStudent from './components/Pages/Student/AddNew';
import { useState } from 'react';
import EditStudent from './components/Pages/Student/EditStudent';
function App() {
  const defaultRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  const [rows, setRows] = useState(defaultRows);
  const onSubmit = (data: any) => {
    setRows((prev) => [...prev, { ...data, id: 10 }]);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Side />
        <div className="content-container">
          <Routes>
            <Route path="/student" element={<Student rows={rows} />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/new-student"
              element={<AddNewStudent onSubmit={onSubmit} />}
            />
            <Route path="/student/edit" element={<EditStudent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
