import axiosInstance from "../../../../utils/axiosInstance"

export const getAllStudent = async (setStudents : any)=>{
    try{
        const {data: students} = await  axiosInstance.get('/student');
        
        setStudents(students)
    }catch(error){
        console.log(error);
    }
}   
 