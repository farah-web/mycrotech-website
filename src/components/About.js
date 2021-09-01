import React from 'react'
import Common from '../components/Common'
import webimg from '../images/team.svg'

const About = () => {
  return (
    <>
      <Common
        heading="Know about "
        imgsrc={webimg}
        link="/contact"
        btnCaption="Contact Us"
      />
    </>
  )
}

export default About