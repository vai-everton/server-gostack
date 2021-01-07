import 'reflect-metadata';
import express from 'express';
import routes from './routes/index';
import otherRoutes from './routes/appointments.routes';
import './database';

const app = express();
app.use(express.json());
app.use(routes);

app.use(otherRoutes);

app.listen(3333, () => {
    console.log('On');
});
