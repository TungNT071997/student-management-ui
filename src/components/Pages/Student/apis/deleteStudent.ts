import axiosInstance from "../../../../utils/axiosInstance";

export const deleteStudent = async (id: string) => {
    try {
        await axiosInstance.delete(`/student/${id}`);
    } catch (error) {
        console.log(error)
    }
}