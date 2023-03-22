import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getOneStudent } from '../apis/getOneStudent';
import { updateStudent } from '../apis/updateStudent';
import { Student } from '../EditStudent';

export const useEditStudent = () => {
  const { id } = useParams<{ id: string }>();
  const emptyStudent = useMemo(
    () => ({
      firstName: '',
      lastName: '',
      phoneNumber: 0,
      email: '',
      dateOfBirth: '',
      address: '',
    }),
    []
  );
  const [student, setStudent] = useState<Student>(emptyStudent);
  const memoStudent = useMemo(() => student, [student]);
  useEffect(() => {
    getOneStudent(setStudent, id as string);
  }, [id]);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: memoStudent,
  });
  useEffect(() => {
    reset(memoStudent); // reset the form with the retrieved student data
  }, [reset, memoStudent]);

  const onSubmit = async (data: Student) => {
    console.log(data);
    await updateStudent(id as string, data);
  };
  return {
    student,
    register,
    handleSubmit,
    onSubmit,
  };
};
function reset(student: {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  dateOfBirth: string;
  address: string;
}) {
  throw new Error('Function not implemented.');
}
