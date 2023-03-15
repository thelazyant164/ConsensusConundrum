require('dotenv').config();

const PORT = process.env.PORT;
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const RAPID_API_HOST = process.env.RAPID_API_HOST;
const RAPID_API_URL = process.env.RAPID_API_URL;

module.exports = {
  PORT,
  RAPID_API_KEY,
  RAPID_API_HOST,
  RAPID_API_URL
};
