import pool from '../config/db.js';


export const fetchAllStudents = async () => {
  const [rows] = await pool.execute("SELECT * FROM student");
  return rows;
};