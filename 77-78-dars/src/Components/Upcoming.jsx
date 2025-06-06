import bg from "../assets/images/bg.png";
import tor from "../assets/images/tor.png";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useApi from "../hooks/useApi";
import Loader from "./UI/Loader";
import loadingStore from "../stores/Loading";
const Upcoming = () => {
  // const {loading} = loadingStore()
  const { data, getApi,loading} = useApi();
  const line = useRef(null);
  const [nextSlide, setnextSlide] = useState(1);
  const onAutoplayTimeLeft = (s, time, progress) => {
    let width = (1 - progress) * 100;
    line.current.style.width = width + "%";
  };
  let windowScreen = window.innerWidth
  function activeSlideIndex(swiper) {
    if (nextSlide == 19) {
      setnextSlide(0);
    } else {
      setnextSlide(nextSlide + 1);
    }
  }
  useEffect(() => {
    getApi("movie/upcoming");
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="upcoming">
      <Swiper
      allowSlidePrev={false}
        onSlideNextTransitionEnd={activeSlideIndex}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl:'.upcoming__next'
        }}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper upcoming__swiper"
      >
        {data.map((movie, index) => {
          return (
            <SwiperSlide key={index} className="upcoming__slide">
              <img
                src={windowScreen > 575 ? import.meta.env.VITE_IMG_FULL + movie.backdrop_path : import.meta.env.VITE_IMG_FULL + movie.poster_path}
                alt=""
              />
              <h1 className="upcoming__slide-title">{movie.title}</h1>
              <p className="upcoming__slide-text">
                {movie.overview || "Izox topilmadi!"}
              </p>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <div className="upcoming__next">
            <span className="upcoming__next-text">Следующий</span>
            <h3 className="upcoming__next-title">{data[nextSlide].title}</h3>
            <img
              className="upcoming__next-img"
              src={import.meta.env.VITE_IMG + data[nextSlide].backdrop_path}
              alt=""
            />
            <div className="upcoming__next-line">
              <span ref={line} className="upcoming__progress-line"></span>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Upcoming;
