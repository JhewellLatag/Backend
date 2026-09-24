import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookRoutes = express.Router();
 
bookRoutes.get('/all', bookController.getAllBooks);

export default bookRoutes;
