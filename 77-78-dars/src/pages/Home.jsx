import React from 'react'
import Upcoming from '../Components/Upcoming'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <>
    <Upcoming/>
    <Slider type="movie"/>
    <Slider type="tv"/>
    </>
  )
}

export default Home