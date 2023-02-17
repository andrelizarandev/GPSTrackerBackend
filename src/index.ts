// Modules
import Cors from 'cors';
import Dotenv from 'dotenv';
import Express from 'express';

// DB Connection
import createMongoConnection from './utils/dbConnection';

// Router
import gpsRouter from './router/gps';
import authRouter from './router/auth';

Dotenv.config();
const app = Express();
app.use(Express.json());
app.use(Cors());

createMongoConnection();

app.use('/auth', authRouter);
app.use('/gps', gpsRouter);

app.listen(process.env.PORT!, () => console.log("Backend online"));