import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { addAlbum, deleteAlbum } from "../../services/services";

const AddRemoveSection = () => {
  const [section, setSection] = useState("agregar");
  const [artistToDelete, setArtistToDelete] = useState("");

  const [date, setDate] = useState({
    artist: "",
    album: "",
    sales: "",
  });

  const handleDeleteAlbum = () => {
    deleteAlbum(artistToDelete);
    setArtistToDelete("");
  };

  const handleChange = (e) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    addAlbum(date.artist, date.album, parseInt(date.sales));
    setDate({});
  };

  return (
    <div>
      <div className="flex justify-center">
        <CustomButton onClick={() => setSection("agregar")}>
          Agregar
        </CustomButton>
        <CustomButton onClick={() => setSection("eliminar")}>
          Eliminar
        </CustomButton>
      </div>
      <div>
        {section === "agregar" ? (
          <div className="w-1/2 mx-auto my-10 p-10">
            <form>
              <div className="mx-10 my-5">
                <label className="block mb-2 text-base font-medium text-black">
                  Artista
                </label>
                <input
                  type="text"
                  id="artist"
                  name="artist"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Artist"
                  required
                />
              </div>
              <div className="mx-10 my-5">
                <label className="block mb-2 text-base font-medium text-black">
                  Album
                </label>
                <input
                  type="text"
                  id="album"
                  name="album"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Album"
                  required
                />
              </div>
              <div className="mx-10 my-5">
                <label className="block mb-2 text-base font-medium text-black">
                  Copias Vendidas
                </label>
                <input
                  type="number"
                  id="sales"
                  name="sales"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Sales"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-72 sm:w-auto px-10 m-10 py-2.5 text-center0"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="w-1/2 mx-auto my-10 p-10">
            <div className="mx-10 my-5">
              <label className="block mb-2 text-base font-medium text-black">
                Artista
              </label>
              <input
                type="text"
                value={artistToDelete}
                onChange={(e) => setArtistToDelete(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Artista"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleDeleteAlbum}
              className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-72 sm:w-auto px-10 m-10 py-2.5 text-center"
            >
              Eliminar Artista
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRemoveSection;
