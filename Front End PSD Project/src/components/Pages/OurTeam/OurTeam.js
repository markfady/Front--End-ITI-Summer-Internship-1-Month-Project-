import React, { Fragment } from 'react'
import SectionHeader from '../../Globals/SectionHeader'
import TeamItem from './TeamItem'

import img1 from '../../../assets/images/our-team/member-1.jpg'
import img2 from '../../../assets/images/our-team/member-2.jpg'
import img3 from '../../../assets/images/our-team/member-3.jpg'

import './OurTeam.css'
import Slider from './Slider'

function OurTeam() {
  return (
    <Fragment>
      {/* Start Our Team */}
      <div className="our-team">
        <div className="container">

          <SectionHeader
            smallTitle="Who we are"
            bigTitle="meet our team"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          {/* Members */}
          <div className="members">
            <div className="row">
              
              <TeamItem
                animation="fade-right"
                src={img1}
                name="mathew dix"
                job="graphic design"
              />
              <TeamItem
                animation="fade-up"
                src={img2}
                name="Christopher campbell"
                job="Branding/UX design"
              />
              <TeamItem
                animation="fade-left"
                src={img3}
                name="Michael fertig"
                job="Developer"
              />
              <div className="clear-fix"></div>
            </div>
          </div>
        </div>

        <div className="lostyle">
          <div className="container">
            <i className="logostyle fa fa-tree"></i>
            <i className="logostyle fa fa-whatsapp"></i>
            <i className="logostyle fa fa-twitter"></i>
            <i className="logostyle fa fa-youtube"></i>
            <i className="logostyle fa fa-pinterest"></i>
            <i className="logostyle fa fa-leaf"></i>
          </div>
        </div>

        <div className="container">
          <Slider />
        </div>
      </div>
      {/* End Our Team */}
    </Fragment>
  )
}

export default OurTeam
