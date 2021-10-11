require('dotenv').config(); 

module.exports = {
"development": {
    "username": process.development.env.DB_USERNAME,
    "password": process.development.env.DB_PASSWORD,
    "database": process.development.env.DB_DATABASE_DEV,
    "host": process.development.env.DB_HOST,
    "dialect": "mysql"
},

  "test": {
    "username": process.development.env.DB_USERNAME,
    "password": process.development.env.DB_PASSWORD,
    "database": process.development.env.DB_DATABASE_TEST,
    "host": process.development.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.development.env.DB_USERNAME,
    "password": process.development.env.DB_PASSWORD,
    "database": process.development.env.DB_DATABASE_PROD,
    "host": process.development.env.DB_HOST,
    "dialect": "mysql"
  }
}
