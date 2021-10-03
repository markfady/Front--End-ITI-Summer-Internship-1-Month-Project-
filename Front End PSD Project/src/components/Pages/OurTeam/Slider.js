import React, { Fragment } from 'react'

import img1 from '../../../assets/images/slider/person-1.jpg'
import img2 from '../../../assets/images/slider/person-2.jpg'
import img3 from '../../../assets/images/slider/person-3.jpg'

import './Slider.css'

function Slider() {
  return (
    <Fragment>
      <div class="slider">
        <div class="container">
          <div id="my-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">

              <div class="carousel-item active">
                <div class="row">
                  <div class="col-lg-3 col-sm-12">
                    <img
                      src={img1}
                      class="w-100 rounded-circle"
                      alt=""
                    />
                  </div>

                  <div class="col-lg-9 col-sm-12">
                    <div class="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span class="underline"></span>
                        &nbsp; &nbsp; Ismail Ahmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-3 col-sm-12">
                    <img
                      src={img3}
                      class="w-100 rounded-circle"
                      alt=""
                    />
                  </div>

                  <div class="col-lg-9 col-sm-12">
                    <div class="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span class="underline"></span>
                        &nbsp; &nbsp; Mark Fady
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-3 col-sm-12">
                    <img
                      src={img2}
                      class="w-100 rounded-circle"
                      alt=""
                    />
                  </div>

                  <div class="col-lg-9 col-sm-12">
                    <div class="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span class="underline"></span>
                        &nbsp; &nbsp; Malala
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#my-carousel"
                data-bs-slide="prev"
              >
                <span class="text-dark" aria-hidden="true">
                  <i class="fa fa-chevron-left"></i>
                </span>
              </button>

              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#my-carousel"
                data-bs-slide="next"
              >
                <span class="text-dark" aria-hidden="true">
                  <i class="fa fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Slider
