import axiosInstance from "../../../../utils/axiosInstance";

export const updateStudent = async (id: string , data : any) => {
    try {
        await axiosInstance.patch(`/student/${id}`,data);
    } catch (error) {
        console.log(error)
    }
}