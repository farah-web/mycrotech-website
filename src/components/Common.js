import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">

              <div className="row d-flex align-items-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>{props.heading} <strong className="brand-name"> MicroTech</strong></h1>
                  <h2 className="my-3">We are a team of developer making dynamic websites.</h2>
                  <div className="mt-3">
                  <NavLink to={props.link} className="btn-get-started">{props.btnCaption}</NavLink>
                  </div>
                </div>

                <div className="col-md-6 header-img order-1 order-lg-2">
                  <img src={props.imgsrc} className="img-fluid main-image" alt="HeroImage" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
