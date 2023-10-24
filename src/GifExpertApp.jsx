import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) {
      return;
    }

    setCategories([onNewCategory, ...categories]);

    // setCategories(cat=>[...cat,'Naruto'])
  };

  return (
    <>
      <img className="page-logo" src="/img-title.png" alt="logo" />
      {/* <h1><span className="h1onetitle">GifExpert</span><span className="h1title">App</span></h1> */}

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
