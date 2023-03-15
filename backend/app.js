const express = require('express');
require('express-async-errors');
const cors = require('cors');
const config = require('./utils/config');

const app = express();
const promptRouter = require('./controllers/prompt');

const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/getprompt', promptRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
