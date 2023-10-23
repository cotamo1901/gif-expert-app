import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return {};
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
      <input className="input"
        type="text"
        placeholder="Search gif"
        value={inputValue}
        onChange={onInputChange}
        
      />
            <img src="../../public/search-icon.svg" alt="" />

     </div>
    </form>
  );
};
