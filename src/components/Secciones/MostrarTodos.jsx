import React from "react";
import { musicData } from "../../services/services";

const MostrarTodos = () => {
  const [filteredResults, setFilteredResults] = React.useState(musicData);

  return (
    <>
      {filteredResults.map((album, index) => (
        <div
          key={index}
          className="w-96 h-auto p-5 border-2 mx-5 my-3 text-center text-base"
        >
          <h1 className="font-bold my-1">
            Artista: <span className="font-medium mx-1">{album.artist}</span>
          </h1>
          <h2 className="font-bold">
            Album: <span className="font-normal">{album.name}</span>
          </h2>
          <p className="my-1 font-bold">
            Copias vendidas:
            <span className="font-medium mx-1">{album.sales}</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default MostrarTodos;
