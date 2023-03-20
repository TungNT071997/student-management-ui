import { useEffect, useState } from "react"
import { getAllStudent } from "../apis/getAllStudent";

export const useStudent = () => {
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        getAllStudent(setStudents);
    }, [])
    return students;
}