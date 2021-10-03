import React, { Fragment } from 'react'
import SectionHeader from '../../Globals/SectionHeader'

import './AboutUs.css'
import AboutItem from './AboutItem'

import aboutImg1 from '../../../assets/images/about-us/about-us-1.jpg'
import aboutImg2 from '../../../assets/images/about-us/about-us-2.jpg'
import aboutImg3 from '../../../assets/images/about-us/about-us-3.jpg'

function AboutUs() {
 
  return (
    <Fragment>
      <div className="about-us">
        <div className="container">
          <SectionHeader
            smallTitle="What we do"
            bigTitle="story about us"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis delectus obcaecati repudiandae iusto. Voluptatibus vel autexplicabo officia modi dolores nihil quod deserunt, cum quam perspiciatis voluptatem asperiores rerum"
          />

          <div className="about-us-items">
            <div className="row">
              <AboutItem
                animation="fade-right"
                src={aboutImg1}
                icon="pencil-square-o"
                desc="managment"
              />
              <AboutItem
                animation="fade-up"
                src={aboutImg2}
                icon="users"
                desc="super team"
              />
              <AboutItem
                animation="fade-left"
                src={aboutImg3}
                icon="handshake-o"
                desc="commitment"
              />
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default AboutUs
