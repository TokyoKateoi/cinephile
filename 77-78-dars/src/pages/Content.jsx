import React, { useState } from "react";
import { Link } from "react-router-dom";

function Content({data}) {
  return (
    <div className="content container">
      <h2 className="content__title"></h2>
      <div className="content__list">
        {data.map((film, index) => {
          const type = film.title ? "movie" : "tv"
          return (
            <Link to={`/watch/${type}/${film.id}`} key={index} className="content__item">
              <img src={import.meta.env.VITE_IMG + film.poster_path} alt="" className="content__img" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
