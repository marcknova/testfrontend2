const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];

const capitalizeWords = (str) => {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

const addAlbum = (artist, name, sales) => {
  musicData.push({ artist, name, sales });
};

const deleteAlbum = (artistName) => {
  const formattedArtistName = capitalizeWords(artistName);

  const index = musicData.findIndex(
    (album) => album.artist === formattedArtistName
  );
  if (index !== -1) {
    musicData.splice(index, 1);
  }
};

const searchAlbum = (artistName) => {
  return musicData.filter((album) =>
    album.artist.toLowerCase().includes(artistName.toLowerCase())
  );
};

export { musicData, addAlbum, deleteAlbum, searchAlbum };
