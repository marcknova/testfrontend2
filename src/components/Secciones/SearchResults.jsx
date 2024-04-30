import React from "react";

const SearchResults = ({ searchTerm, results }) => {
  return (
    <div>
      <h2>Resultados de la búsqueda para "{searchTerm}":</h2>
      <ul>
        {results.map((album, index) => (
          <div
            key={index}
            className="w-96 h-auto p-5 border-2 mx-5 my-3 text-center text-base"
          >
            <h1 className="my-1">
              El álbum <span className="font-medium mx-1">{album.name}</span>{" "}
              del artista{" "}
              <span className="font-medium mx-1">{album.artist}</span> vendió
              aproximadamente{" "}
              <span className="font-medium mx-1">{album.sales}</span> copias.
            </h1>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
