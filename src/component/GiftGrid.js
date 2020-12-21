// import React, { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";

import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";
export const GiftGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     getGifs(category).then((imgs) => setImages(imgs));
  //   }, [category]);

  const { loading, data } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>

      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};
