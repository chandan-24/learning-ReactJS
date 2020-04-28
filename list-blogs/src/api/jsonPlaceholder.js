const axios = require('axios');

const jsonPlaceholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

module.exports = jsonPlaceholderApi;