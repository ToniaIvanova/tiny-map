import express, { json, urlencoded } from "express";
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from 'cors';
import stationRouter from './routers/station.router.js';
import productRouter from './routers/product.router.js';
import regionRouter from './routers/region.router.js';
import userRouter from './routers/user.router.js';

import './storage/db-context.js';

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/station', stationRouter);
app.use('/product', productRouter);
app.use('/region', regionRouter);
app.use('/user', userRouter);

const { PORT } = process.env;

app.listen(PORT, function(){
  console.log(chalk.cyan(`App is listening on ${PORT}`));
});
