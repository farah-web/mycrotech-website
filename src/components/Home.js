import React from 'react'
import { NavLink } from 'react-router-dom'
import webimg from '../images/reactimg.svg'
import Common from '../components/Common'

const Home = () => {
  return (
    <>
      <Common
        heading="Grow your business from "
        imgsrc={webimg}
        link="/service"
        btnCaption="Get Started"
      />

    </>
  )
}

export default Home
