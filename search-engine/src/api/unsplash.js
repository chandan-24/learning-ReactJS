const axios = require('axios');

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID QgTDpK9Q60pKYNauMPBc20jU1MEGiMbiUdGt3dTHlxc',
  }
});

class Unsplash {
  searchImage = async(searchTerm) => {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query: searchTerm,
        per_page: 20,
      }
    });
    return response.data;
  }
}

module.exports = Unsplash;