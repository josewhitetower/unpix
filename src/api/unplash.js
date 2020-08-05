const axios = require('axios');
require('dotenv').config({path: '../.env'});
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${process.env.VUE_APP_CLIENT_ID}`,
  },
});

const unplash = {
  search: (query) => {
    const path = `/search/photos?${query}`;
    return instance
      .get(path)
      .then((response) => response.data)
      .catch((error) => ({error: error}));
  },
  random: () => {
    const path = `/photos/random`;
    return instance
      .get(path)
      .then((response) => response.data)
      .catch((error) => ({error: error}));
  },
  list: () => {
    const path = '/photos?per_page=24';
    return instance
      .get(path)
      .then((response) => response.data)
      .catch((error) => ({error}));
  },
};

module.exports = unplash;
