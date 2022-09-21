import React from 'react'
import { Link } from "gatsby"
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__header-container'>
            <h3 className='footer__header'>InnerCircle</h3>
            <img src='' alt="" className='footer__logo'/>
            <p className='footer__copyright'>Copyright &#169; 2022 Group Inner Circle</p>
        </div>
        <div className='footer__links-container'>
            <div className='footer__explore-links'>
                <h4>Explore</h4>
                <Link to='services'>Services</Link>
                <Link to='about'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='blog'>Blog</Link>
            </div>
            <div className='footer__contact-links'>
                <h4>Contact</h4>
                <p>123 King Street Suite 456 Montreal, QC H1C 2B3</p>
            </div>
            <div className='footer__follow-links'>
                <h4>Follow</h4>
                <a href='https://www.linkedin.com/company/transport-inner-circle/'>Linkedin</a>
                <a href='https://www.instagram.com'>Instagram</a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer