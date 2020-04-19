const axios = require('axios');

const API_KEY = 'AIzaSyCCCMU6PxmChVJ3eargLkz_PTJcoMK1Knk';
const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

class YouTube {
  searchList = async(searchQuery) => {
    const response = await youtubeApi.get('search',{
      params:{
        part: 'snippet',
        maxResults: 10,
        key: API_KEY,
        q: searchQuery,
      }
    });
    return response.data.items;
  };

  listPopular = async() => {
    const response = await youtubeApi.get('videos',{
      params:{
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 10,
        key: API_KEY,
        regionCode: 'IN',
      }
    })
    return response.data.items;
  }
}

module.exports = YouTube;