import ResultsPage from "./ResultsPage";
import { useState } from "react";
import AddRemoveSection from "./Secciones/AddRemoveSection";

const Home = () => {
  const [section, setSection] = useState("results");

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };

  return (
    <div>
      <div className="flex mb-12 text-white bg-black h-20">
        <h1 className="text-center text-3xl p-5 font-bold">App de Musica</h1>
      </div>
      <div className="items-center text-center my-5">
        <button
          className="mx-3 bg-blue-800 h-10 text-white w-44 rounded-lg"
          onClick={() => handleSectionChange("results")}
        >
          Búsqueda
        </button>
        <button
          className="mx-3 mb-5 bg-red-800 h-10 text-white w-44 rounded-lg"
          onClick={() => handleSectionChange("addRemove")}
        >
          Agregar/Eliminar
        </button>
      </div>

      {section === "results" && <ResultsPage />}
      {section === "addRemove" && <AddRemoveSection />}
    </div>
  );
};

export default Home;
