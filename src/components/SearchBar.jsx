import { useState } from "react";

function SearchBar({ handleSubmit }) {
  let [input, setInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
          className=" bg-slate-500"
        ></input>
        {input}
      </form>
    </div>
  );
}
export default SearchBar;
