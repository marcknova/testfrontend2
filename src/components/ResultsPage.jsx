// ResultsPage.js
import { useEffect, useState } from "react";
import { musicData } from "../services/services";
import CustomButton from "./CustomButton";
import Search from "./Search";
import MasVendidos from "./Secciones/MasVendidos";
import MostrarxCaracter from "./Secciones/MostrarxCaracter";
import MostrarTodos from "./Secciones/MostrarTodos";
import SearchResults from "./Secciones/SearchResults";

const ResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [section, setSection] = useState("todos");
  const [filteredResults, setFilteredResults] = useState(musicData);

  const handleSearch = (searchTerm) => {
    setSection("searchResults");
    setSearchTerm(searchTerm);
  };

  // Filtrar los resultados según el término de búsqueda
  useEffect(() => {
    if (searchTerm) {
      const filteredResults = musicData.filter((album) =>
        album.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filteredResults);
    } else {
      setFilteredResults(musicData);
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="flex mx-12 justify-center">
        <CustomButton onClick={() => setSection("todos")}>
          Mostrar todos
        </CustomButton>
        <CustomButton onClick={() => setSection("caracteres")}>
          Nombre 8 caracteres
        </CustomButton>
        <CustomButton onClick={() => setSection("masvendidos")}>
          Mas Vendidos
        </CustomButton>
      </div>
      <Search onSearch={handleSearch} />
      <div className="content p-16 flex flex-wrap justify-center">
        {section === "searchResults" && (
          <SearchResults searchTerm={searchTerm} results={filteredResults} />
        )}
        {section === "masvendidos" && <MasVendidos />}
        {section === "todos" && <MostrarTodos />}
        {section === "caracteres" && <MostrarxCaracter />}
      </div>
      <div className="text-center">
        {searchTerm && filteredResults.length === 0 && (
          <p>No se encontraron resultados para {searchTerm}</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
