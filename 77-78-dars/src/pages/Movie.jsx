import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import Content from "./Content";
import popularStore from "../stores/popularStore";
import ReactPaginate from "react-paginate";

const Movie = () => {
  const { movie, getPopular } = popularStore();
  const { getApi, data, setpage,page } = useApi();
  function changePage({selected}) {
    setpage(selected + 1)
  }
  useEffect(() => {
    if (movie.length === 0 || page >= 1) {
      getApi("movie/popular");
    }
  }, [page]);
  useEffect(() => {
    if (movie.length === 0 || page >= 1) {
      getPopular(data, "movie");
    }
  }, [data]);
  return (
    <div>
      <Content data={movie} />
      <ReactPaginate
      className="paginate"
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={500}
        previousLabel="Back"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Movie;
