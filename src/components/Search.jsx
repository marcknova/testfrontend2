import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-16">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 "
          />
          <button
            className="mx-3 bg-black h-10 text-white w-12 rounded-lg"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
