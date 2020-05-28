const songsReducer = () => {
  return [
    { title: "Smells like teen spirit", duration: "4:45" },
    { title: "Barbie girl", duration: "3:30" },
    { title: "All star", duration: "4:10" },
    { title: "Macarena", duration: "2:55" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
