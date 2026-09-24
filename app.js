import express from "express";
import bookRoutes from "./routes/bookRoutes.js";

/* create express app */
const app = express();

/* Routes Implementation */
app.use('/book', bookRoutes);

try {       // trycad handle errors
    const port = 3000; //define port variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e ) {
    console.Log(e);
}