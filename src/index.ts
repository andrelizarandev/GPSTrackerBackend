// Modules
import Cors from 'cors';
import Dotenv from 'dotenv';
import Express from 'express';

// DB Connection
import createMongoConnection from './utils/dbConnection';

// Routers
import gpsRouter from './router/gps';
import driverRouter from './router/user';
import companyRouter from './router/company';

Dotenv.config();
const app = Express();
app.use(Express.json());
app.use(Cors());

createMongoConnection();

app.use('/driver', driverRouter);
app.use('/gps', gpsRouter);
app.use('/company', companyRouter);

app.listen(process.env.PORT!, () => console.log("Backend online"));