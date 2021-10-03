import React, { Fragment } from 'react'
import SectionHeader from '../../Globals/SectionHeader'
import ServiceItem from './ServiceItem'

import './Services.css'

function Services() {
  return (
    <Fragment>
      <div className="services">
        <div className="container">
          <SectionHeader
            smallTitle="We work with"
            bigTitle="amazinc services"
            desc= ""
          />
          <div className="services-content">
            <ServiceItem
              animation="zoom-in"
              icon="clock-o"
              title="photography"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            />
            <ServiceItem
              animation="zoom-in"
              icon="area-chart"
              title="web design"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            />
            <ServiceItem
              animation="zoom-in"
              icon="desktop"
              title="Creativity"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            />
            <ServiceItem
              animation="zoom-in"
              icon="book"
              title="seo"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            />
            <ServiceItem
              animation="zoom-in"
              icon="home"
              title="css/html"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            />
            <ServiceItem
              animation="zoom-in"
              icon="picture-o"
              title="digital"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            />
            <div className="clear-fix"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Services
