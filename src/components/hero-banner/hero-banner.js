import React from 'react'
import './hero-banner.scss'

const HeroBanner = () => {
  return (
    <section className="section hero-banner">
        <div className='hero-banner__content'>
            <h1 className='hero-banner__title'>Your All-In-One Freight Company</h1>
            <p className='hero-banner__text'>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. In nec arcu ullamcorper, bib
                endum libero et, commodo metus. Vesti
                bulum rutrum convallis mattis.
            </p>
        </div>
        <div className='hero-banner__image-container'>
            <img className='hero-banner__image' src='../../images/hero-banner-image.png' alt='' />
        </div>
    </section>
  )
}

export default HeroBanner