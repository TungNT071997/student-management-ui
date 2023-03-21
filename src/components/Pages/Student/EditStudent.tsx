import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import {  updateStudent } from "./apis/updateStudent";
import {  getAllStudent } from "./apis/getAllStudent";



export default function EditStudent() {
  type Student = {
    firstName: string;
    lastName: string;
    age: number;
  };
  // const Students: any = useStudent();
  const { id } = useParams<{id : string}>() ;
  const navigate = useNavigate();
  const [student , setStudent] = useState<Student>({
    firstName: '',
    lastName: '',
    age: 0,
  })

    useEffect(() => {
      const fetchStudent = async () => {
          const fetchedStudent : any = await getAllStudent(id);
          setStudent(fetchedStudent );
      };
      fetchStudent();
    },[id])
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await updateStudent(id as string, student);
      navigate('/student')
      
    }
    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { name, value } = event.target;
      setStudent((pre) => ({ ...pre, [name]: value }));
    };
  return (
    <div>
    <h1>Edit Student</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={student.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={student.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
  );
}
