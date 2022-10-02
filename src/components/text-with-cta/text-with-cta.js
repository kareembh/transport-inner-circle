import React from 'react'
import { Link } from "gatsby"
import './text-with-cta.scss'
const TextWithCta = () => {
  return (
    <div className='text-with-cta'>
        <h2 className='text-with-cta__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In nec arcu ullamcorper, bibendum libero et, commodo met us. Vestibulum rutrum convallis mattis. Vivamus ultricies
            molustae sapien.
        </h2>
        <div className='text-with-cta__button'>
            <Link to='sevices' className='btn btn--black'>Services</Link>
        </div>
    </div>
  )
}

export default TextWithCta;