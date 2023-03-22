import axiosInstance from "../../../../utils/axiosInstance"

export const getOneStudent = async (setStudent : any , id : string )=>{
    try{
        const {data: student} = await  axiosInstance.get(`/student/${id}`);
        
        setStudent(student)
       
    }catch(error){
        console.log(error);
    }
}   
 