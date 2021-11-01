const dotenv = require('dotenv');

dotenv.config();

const { DB_URI } = process.env;

// In this file you can configure migrate-mongo
module.exports = {
  mongodb: {
    url: DB_URI,
    databaseName: 'products',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  // The migrations dir, can be an relative or absolute path.
  migrationsDir: './migrations',
  // The mongodb collection where the applied changes are stored.
  changelogCollectionName: '_migrations',
};