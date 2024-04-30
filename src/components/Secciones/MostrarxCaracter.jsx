import React, { useEffect } from "react";
import { musicData } from "../../services/services";

const MostrarxCaracter = () => {
  const [filteredResults, setFilteredResults] = React.useState([]);

  const handleLongNames = () => {
    const longNames = musicData.filter((album) => album.artist.length > 8);
    console.log(longNames);
    setFilteredResults(longNames);
  };

  useEffect(() => {
    handleLongNames();
  }, []);

  return (
    <>
      {filteredResults.map((album, index) => (
        <div
          key={index}
          className="w-96 h-auto p-5 border-2 mx-5 my-3 text-center text-base"
        >
          <h1 className="font-bold my-2">
            El Artista <span className="font-medium mx-1">{album.artist}</span>{" "}
            tiene un nombre muy grande
          </h1>
        </div>
      ))}
    </>
  );
};

export default MostrarxCaracter;
