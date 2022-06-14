import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


const responsiveImageComponent = (props) => {
  return (
    <StaticImage
      src={props.img}
      className={props.ClassName}
      alt="img"

      placeholder="blurred"
      
    />
  )
}

export default responsiveImageComponent