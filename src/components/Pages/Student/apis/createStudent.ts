import axiosInstance from "../../../../utils/axiosInstance";

export const createStudent = async (data: any) => {
    try {
        await axiosInstance.post('/student',data);
    } catch (error) {
        console.log(error)
    }
}