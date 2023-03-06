import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    setImages(await (await searchImages(term)).data.results);
    console.log(images);
  };
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
