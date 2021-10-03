import React, { Fragment } from 'react'
import SectionHeader from '../../Globals/SectionHeader'
import BlogItem from './BlogItem'

import blogImg1 from '../../../assets/images/blogs/blog-1.jpg'
import blogImg2 from '../../../assets/images/blogs/blog-2.jpg'
import blogImg3 from '../../../assets/images/blogs/blog-3.jpg'
// import blogImg4 from '../../../assets/images/blogs/blog-4.jpg'

import './Blogs.css'

function Blogs() {
  return (
    <Fragment>
      <div className="blogs">
        <div className="container">
          <SectionHeader
            smallTitle="Our stories"
            bigTitle="latest blog"
            desc=""
          />

          <div className="blogs-content">
            <div className="row">
              <BlogItem
                image={blogImg2}
                title="Lorem ipsum dolor sit amet."
                desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero, qui dicta consequuntur non tempora quod."
              />
              <BlogItem
                image={blogImg1}
                title="Lorem ipsum dolor sit amet."
                desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero, qui dicta consequuntur non tempora quod."
              />
              <BlogItem
                image={blogImg3}
                title="Lorem ipsum dolor sit amet."
                desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Libero, qui dicta consequuntur non tempora quod."
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Blogs
