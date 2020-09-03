import React from 'react'
import assets from 'assets'

const Banner: React.FC = () => {
  return (<div className="banner-container">
    <img src={assets.banner} alt="banner" />
  </div>)
}

export default Banner