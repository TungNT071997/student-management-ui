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
  return (
    <BrowserRouter>
      <div className="App">
        <Side />
        <div className="content-container">
          <Routes>
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/new-student" element={<AddNewStudent />} />
            <Route path="/edit-student" element={<EditStudent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
