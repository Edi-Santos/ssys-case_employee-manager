const { MongoClient } = require('mongodb');

const MOGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'PSC_SSYS_Employee_Manager';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => MongoClient
  .connect(MOGO_DB_URL, OPTIONS)
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit();
    });

module.exports = connection;
