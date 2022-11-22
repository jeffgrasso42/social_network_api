// DEPENDENCIES
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.port || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// SERVER
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Social Network API server running on port ${PORT}!`);
  });
});
