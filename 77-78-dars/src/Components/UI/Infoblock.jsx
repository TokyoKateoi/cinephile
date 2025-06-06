import React, { useEffect } from 'react'
import closeIcon from "@i/close.png";
import clsx from "clsx"
import useApi from '../../hooks/useApi';
import { Link } from 'react-router-dom';
import Cast from './Cast';
import { getRuntime } from '../../helpers';
function Infoblock({infoblock, movieId, type, setinfoblock}) {
  const {data, getApi, loading} = useApi()
  useEffect(()=>{
    if(movieId){
      getApi(`${type}/${movieId}?append_to_response=credits`)
    }
  }, [movieId])
  return (
    <div className={clsx('infoblock', {active: infoblock})}>
      <button className="infoblock__close" onClick={()=> setinfoblock(false)}>
        <img src={closeIcon} alt="" />
      </button>
      <div className="infoblock__content">
        <h2 className="infoblock__title">{data.title || data.name}</h2>
        <p className="infoblock__text">{data.overview || 'Izox topilmadi!'}</p>
        <ul className="infoblock__list">
          {
            data.genres?.map((genre, index)=>{
             return <li key={index}><Link to="" className="infoblock__links">{genre.name}</Link></li>
            })
          }
          <li><span className='infoblock__links'>{getRuntime(data.runtime || data.episode_run_time )}</span></li>
        </ul>
        <ul className="infoblock__cast">
          {
            data.credits?.cast.filter((cast,index)=> index < 4).map((cast,index)=>{
              return <li key={index}><Cast cast={cast}/></li>
            })
          }
        </ul>
      </div>
      <img src={import.meta.env.VITE_IMG_FULL + data.backdrop_path} alt="" className="infoblock__img" />
    </div>
  )
}

export default Infoblock