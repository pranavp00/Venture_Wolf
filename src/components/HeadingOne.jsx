import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'

const HeadingOne = ({text}) => {
  return (
    <h1 style={{fontWeight:'bold'}}>{text}</h1>
  )
}

export default HeadingOne;