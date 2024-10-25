import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

//Routes
import router from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

app.use('/api', router);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
