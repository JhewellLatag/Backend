import pool from '../config/db.js';


export const fetchAllStudents = async () => {
  const [rows] = await pool.execute("SELECT * FROM student");
  return rows;
};

//Insert
export const insert = async(student) => {
  const[result] = await pool.query(
    "INSERT INTO student(name,srcode,program)VALUES(?,?,?)",
     [student.name, student.srcode, student.program]
    );
    return result.insertId;
} 
