const axios = require("axios");
const config = require('../utils/config');
const logger = require('../utils/logger');
const { parse } = require('../utils/promptParser');
const promptRouter = require('express').Router();

promptRouter.get('/', async (request, response, next) => {
  const options = {
    method: 'GET',
    url: config.RAPID_API_URL,
    headers: {
      'X-RapidAPI-Key': config.RAPID_API_KEY,
      'X-RapidAPI-Host': config.RAPID_API_HOST
    }
  };
  axios.request(options).then((res) => {
    response.status(200).json(parse(res.data[0]));
  }).catch((error) => {
    logger.errorInfo(error);
  });
});

module.exports = promptRouter;
