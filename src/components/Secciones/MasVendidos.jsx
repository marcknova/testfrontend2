import React from "react";
import { musicData } from "../../services/services";

const MasVendidos = () => {
  const [filteredResults, setFilteredResults] = React.useState(musicData);
  const [mostSold, setMostSold] = React.useState(null);

  const handleMostSold = () => {
    const mostSold = musicData.filter((album) => album.sales > 1000000);
    const totalSales = mostSold.reduce(
      (total, album) => total + album.sales,
      0
    );
    setMostSold(totalSales);
    setFilteredResults(mostSold);
  };

  React.useEffect(() => {
    handleMostSold();
  }, []);

  return (
    <div>
      {filteredResults.map((album, index) => (
        <div
          key={index}
          className="w-96 h-auto p-5 border-2 mx-5 my-3 text-center text-base"
        >
          <h1 className="font-bold my-2">
            {album.artist}
            <span className="font-medium mx-1">es un gran artista</span>
          </h1>
        </div>
      ))}
      {mostSold ? (
        <h1 className="font-bold text-center my-10">
          Copias Vendidas en total :{" "}
          <span className="font-normal">{mostSold}</span>
        </h1>
      ) : null}
    </div>
  );
};

export default MasVendidos;
