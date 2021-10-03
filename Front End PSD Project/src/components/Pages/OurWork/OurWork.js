import React, { Fragment } from 'react'
import SectionHeader from '../../Globals/SectionHeader'

// import img1 from '../../../assets/images/our-work/our-work-1.jpg'
import img2 from '../../../assets/images/our-work/our-work-2.jpg'
import img3 from '../../../assets/images/our-work/our-work-3.jpg'
import img4 from '../../../assets/images/our-work/our-work-4.jpg'
import img5 from '../../../assets/images/our-work/our-work-5.jpg'
import img6 from '../../../assets/images/our-work/our-work-6.jpg'
import img7 from '../../../assets/images/our-work/our-work-7.jpg'
// import img8 from '../../../assets/images/our-work/our-work-8.jpg'
import img9 from '../../../assets/images/our-work/our-work-9.jpg'

import WorkItem from './WorkItem'

import './OurWork.css'

function OurWork() {
  return (
    <Fragment>
      {/* Start Our Work */}
      <div className="our-work">
        <div className="container">
          <SectionHeader
            smallTitle="What we do"
            bigTitle="some of our work"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis delectus obcaecati repudiandae iusto. Voluptatibus vel aut explicabo officia modi dolores nihil quod deserunt, cum quam perspiciatis voluptatem asperiores rerum!"
          />
        </div>

        {/* Gallery  */}
        <div className="gallery">
          <div className="column">
            <WorkItem img={img3} />
            <WorkItem img={img6} />
          </div>

          <div className="column">
            <WorkItem img={img2} />
            <WorkItem img={img4} />
          </div>

          <div className="column">
            <WorkItem img={img9} />
          </div>

          <div className="column">
            <WorkItem img={img5} />
            <WorkItem img={img7} />
          </div>


        </div>
      </div>
      {/* End Our Work */}

      {/* Start Slider */}
      {/* <div className="slider">
        <div className="container">
          <div id="my-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style="padding: 10px 200px;">
                <div className="row">
                  <div className="col-lg-3 col-sm-12">
                    <img
                      src="./images/slider/person-1.jpg"
                      className="w-100 rounded-circle"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-9 col-sm-12">
                    <div className="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span className="underline"></span>
                        &nbsp; &nbsp; ismail ahmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" style="padding: 10px 200px;">
                <div className="row">
                  <div className="col-lg-3 col-sm-12">
                    <img
                      src="./images/slider/person-3.jpg"
                      className="w-100 rounded-circle"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-9 col-sm-12">
                    <div className="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span className="underline"></span>
                        &nbsp; &nbsp; ismail ahmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" style="padding: 10px 200px;">
                <div className="row">
                  <div className="col-lg-3 col-sm-12">
                    <img
                      src="./images/slider/person-2.jpg"
                      className="w-100 rounded-circle"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-9 col-sm-12">
                    <div className="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span className="underline"></span>
                        &nbsp; &nbsp; ismail ahmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#my-carousel"
                data-bs-slide="prev"
              >
                <span className="text-dark" aria-hidden="true">
                  <i className="fa fa-chevron-left"></i>
                </span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#my-carousel"
                data-bs-slide="next"
              >
                <span className="text-dark" aria-hidden="true">
                  <i className="fa fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Slider */}
    </Fragment>
  )
}

export default OurWork
