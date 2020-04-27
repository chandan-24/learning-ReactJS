const redux = require('redux');
const combineReducers = redux.combineReducers;

const songReducer = () => {
  return [
    {title: "Life is Good", singer: "Future, Drake", duration: "03:57",},
    {title: "Toosie Slide", singer: "Drake", duration: "04:07",},
    {title: "Break My Heart", singer: "Dua Lipa", duration: "03:41",},
    {title: "Godzilla", singer: "Eminem, Juice WRLD", duration: "03:31",},
    {title: "Blinding Lights", singer: "The Weeknd", duration: "03:24",},
    {title: "Sunflower", singer: "Post Malone, Swae Lee", duration: "02:34",},
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

module.exports = combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});