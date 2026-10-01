import * as studentService from '../services/studentService.js';


export const getAllStudents = async (req, res) => {
    const students = await studentService.fetchAllStudents();
    res.status(200).json(students);
}