import mongoose from 'mongoose';
import { MONGOOSE_READY_STATE, MONGOOSE_STATE } from './constants/mongoose-state.js';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

class DbContext {
  constructor() {
    const { DB_URI } = process.env;

    mongoose.connect(DB_URI, {
      ignoreUndefined: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch(error => error);

    this.Mongoose = mongoose;
    // this.Mongoose.set('debug', true);

    this.Mongoose.connection.on(MONGOOSE_STATE.connected, () => {
      console.log(chalk.cyan('Successfully connected to MongoDB with Mongoose!'));
    });

    this.Mongoose.connection.on(MONGOOSE_STATE.disconnected, () => {
      console.log(chalk.yellow('Connection to MongoDB was interrupted!'));
    });

    this.Mongoose.connection.on(MONGOOSE_STATE.error, err => {
      console.log(chalk.red('Unable to connect to MongoDB with Mongoose!'), err);
    });
  }

  getDbStatus() {
    const { readyState } = this.Mongoose.connection;
    const dbStatus = MONGOOSE_READY_STATE[readyState];
    return dbStatus;
  }

  async closeConnection() {
    await this.Mongoose.connection.close();
    console.log(chalk.cyan('The MongoDB connection has been closed successfully!'));
  }
}

export default new DbContext();