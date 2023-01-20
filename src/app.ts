import express from 'express';
import router from './routes';

// create and setup express app
const app = express();
app.use(express.json());
app.use(router);

export default app;
