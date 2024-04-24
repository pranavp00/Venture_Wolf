import React from 'react'
import "../../src/assets/styles/MainSection.css"
const MainSection = ({source}) => {
  return (
    <div className='container-MS'>
    <img src={source} className='bg'></img>
    </div>
  )
}
export default MainSection;
