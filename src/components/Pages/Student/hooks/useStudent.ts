import { useEffect, useState } from 'react';
import { getAllStudent } from '../apis/getAllStudent';

export const useStudent = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudent(setStudents);
  }, []);
  const deleteStudentById = (id: string) => {
    setStudents((pre) => pre.filter((student: any) => student._id !== id));
  };
  return {
    students,
    deleteStudentById,
  };
};
