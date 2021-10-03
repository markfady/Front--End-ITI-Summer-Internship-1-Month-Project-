import React, { Fragment } from 'react'

function BlogItem(props) {
  return (
    <Fragment>
      <div class="col-md-4 col-sm-12">
        <img src={props.image} width="100%" alt="blog..."/>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </Fragment>
  )
}

export default BlogItem
