import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useApi from "../hooks/useApi";
import { Link } from "react-router-dom";
import arrowImg from "@i/arrow.svg";
import popularStore from "../stores/popularStore";
import Infoblock from "./UI/Infoblock";
import Loader from "./UI/Loader";
function Slider({type}) {
  const { data, getApi, loading } = useApi();
  const {getPopular} = popularStore()
  const [infoblock, setinfoblock] = useState(false)
  const [movieId, setmovieId] = useState(null)
  useEffect(() => {
    getApi(`${type}/popular`);
  }, []);
  useEffect(()=>{
    getPopular(data,type)
  },[data])
  let option = {
    320:{
        slidesPerView:1
    },
    576:{
        slidesPerView:2
    },
    900:{
        slidesPerView:3
    },
    1200:{
        slidesPerView:4
    },
    1600:{
        slidesPerView:5
    },
  }
  function openInfoblock(id){
    setmovieId(id)
    setinfoblock(true)
  }
  return (
    <div className="slider">
      <h2 className="slider__title">{type == 'movie' ? 'Фильмы' : "Сереалы"} <img src={arrowImg} alt="" /></h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper slider__swiper"
        spaceBetween={24}
        breakpoints={option}
      >
        {data.map((movie, index) => {
          return (
            <SwiperSlide key={index} className="slider__item" onClick={()=> openInfoblock(movie.id)}>
              <img
                src={import.meta.env.VITE_IMG + movie.poster_path}
                alt=""
                className="slider__img"
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="slider__item" >
            <Link to="/">
            Все {type == 'movie' ? 'Фильмы' : "Сереалы"}
            <img src={arrowImg} alt="" />
            </Link>
        </SwiperSlide>
      </Swiper>
      <Infoblock movieId={movieId} infoblock={infoblock} type={type} setinfoblock={setinfoblock}/>
    </div>
  );
}

export default Slider;
