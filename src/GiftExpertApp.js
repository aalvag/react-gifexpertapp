import React, { useState } from "react";
import { AddCategory } from "./component/AddCategory";
import { GiftGrid } from "./component/GiftGrid";

export const GiftExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);
  // const handleAdd = () => {
  //   setCategories([...categories, "HunterXHunter"]);
  //   // setCategories((cats) => [...cats, "Hunter"]);
  // };

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
