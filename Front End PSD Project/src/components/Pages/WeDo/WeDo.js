import React, { Fragment, useEffect } from 'react'
import SectionHeader from '../../Globals/SectionHeader'

import AOS from 'aos'
import 'aos/dist/aos.css'

import wedoImg from '../../../assets/images/we-do/we-do.jpg'

import './WeDo.css'

function WeDo() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })

    var acc = document.getElementsByClassName('accordion')
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        console.log('hi wedo')
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }, [])

  return (
    <Fragment>
      <div class="we-do">
        <div class="container">
          <SectionHeader
            smallTitle="Services"
            bigTitle="what we do"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis delectus obcaecati repudiandae iusto. Voluptatibus vel autexplicabo officia modi dolores nihil quod deserunt, cum quam perspiciatis voluptatem asperiores rerum"
          />

          <div class="we-do-content">
            <div class="row">
              <div class="col-6" data-aos="zoom-in">
                <img src={wedoImg} alt="" />
              </div>

              <div class="col-6" data-aos="fade-left">
                <div class="accordion">
                  <i class="fa fa-image"></i>
                  <p>photograpy</p>
                </div>
                <div class="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div class="accordion">
                  <i class="fa fa-code"></i>
                  <p>creativity</p>
                </div>
                <div class="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div class="accordion">
                  <i class="fa fa-bullseye"></i>
                  <p>web design</p>
                </div>
                <div class="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default WeDo
