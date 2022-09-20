import React from 'react'
import './hero-banner.scss'

const HeroBanner = () => {
  return (
    <div className='hero-banner'>
        <div className='hero-banner__black'>
            <div className='hero-banner__content'>
                <h1 className='hero-banner__title'>Your All-In-One Freight Company</h1>
                <p className='hero-banner__text'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. In nec arcu ullamcorper, bib
                    endum libero et, commodo metus. Vesti
                    bulum rutrum convallis mattis.
                </p>
            </div>
        </div>
        <div className='hero-banner__white'></div>
        <div className='hero-banner__image'></div>
        {/* need to do this but with image */}
        {/* <img className='hero-banner__image' src='./../../images/hero-banner-image.png' alt='' /> */}
    </div>
  )
}

export default HeroBanner