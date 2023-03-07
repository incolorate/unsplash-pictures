import { useState } from "react";

function SearchBar({ handleSubmit }) {
  let [input, setInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
  };

  return (
    <div className="grid grid-cols-3">
      <form
        onSubmit={handleFormSubmit}
        className="col-start-1 col-end-4 sm:col-start-2 sm:col-end-3"
      >
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
          className="bg-indigo-100 rounded-xl my-5 indent-2 border-0 outline-0 h-10 text-lg shadow-lg w-full"
          placeholder="Search for images"
        ></input>
      </form>
    </div>
  );
}
export default SearchBar;
