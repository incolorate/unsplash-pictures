import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const searchResult = await searchImages(term);
    setImages(searchResult);
  };
  return (
    <div className="container mx-auto">
      <SearchBar handleSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
