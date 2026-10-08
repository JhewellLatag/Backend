import pool from '../config/db.js';


export const fetchAllBooks = async () => {
  const [rows] = await pool.execute("SELECT * FROM book");
  return rows;
};
// sa model mag iinsert ng book    model>service>controller>route

//Insert
export const insert = async(book) => {
  const[result] = await pool.query(
    "INSERT INTO book(name,author)VALUES(?,?)",
     [book.name, book.author]
    );
    return result.insertId;
} 
