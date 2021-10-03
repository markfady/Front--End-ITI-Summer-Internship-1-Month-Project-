import React, { Fragment } from 'react'
import SectionHeader from '../../Globals/SectionHeader'

import './Reviews.css'
import ReviewItem from './ReviewItem'

import revBackImg from '../../../assets/images/reviews/background-review.jpg'

import img1 from '../../../assets/images/reviews/client-1.jpg'
import img2 from '../../../assets/images/reviews/client-2.jpg'
import img3 from '../../../assets/images/reviews/client-3.jpg'
import img4 from '../../../assets/images/reviews/client-4.jpg'

function Reviews() {
  return (
    <Fragment>
      <div class="reviews">
        <img src={revBackImg} alt="" />

        <div class="container">
          <SectionHeader
            smallTitle="Happy clients"
            bigTitle="what people say"
            desc=""
          />

          <div id="reviews-content">
            <ReviewItem
              animation="fade-right"
              src={img1}
              name="mathow dix"
              job="graphic design"
              comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sintexercitationem consequuntur laboriosam, natus pariatur facereaperiam officia."
            />

            <ReviewItem
              animation="fade-right"
              src={img2}
              name="jaelynn castillo"
              job="graphic design"
              comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sintexercitationem consequuntur laboriosam, natus pariatur facereaperiam officia."
            />

            <ReviewItem
              animation="fade-right"
              src={img3}
              name="nick karvounis"
              job="graphic design"
              comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sintexercitationem consequuntur laboriosam, natus pariatur facereaperiam officia."
            />

            <ReviewItem
              animation="fade-right"
              src={img4}
              name="mike petrucci"
              job="graphic design"
              comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sintexercitationem consequuntur laboriosam, natus pariatur facereaperiam officia."
            />
            <div className="clear-fix"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Reviews
