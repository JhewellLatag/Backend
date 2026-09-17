import pool from '../config/db.js';


export const fetchAllBooks = async () => {
  const [rows] = await pool.execute("SELECT * FROM book");
  return rows;
};
// sa model mag iinsert ng book    model>service>controller>route