import React, { Fragment, useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function TeamItem({animation, src, name, job}) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  }, [])

  return (
    <Fragment>
      <div className="col-4 " data-aos={animation}>
        <div className="member-img">
          <img
            src={src}
            className="customimage"
            width="100%"
            alt="member..."
          />
          <div className="overlay">
            <div className="overlay-content">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="namestyle">{name}</p>
        <p className="jobstyle">{job}</p>
      </div>
    </Fragment>
  )
}

export default TeamItem
