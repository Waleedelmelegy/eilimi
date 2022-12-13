import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../../../shared/slider/slider'
import Image from '../../../shared/images'

const slider = () => {
  return (
    <Slider
      hasImage={
        <Image
          src={'/assets/banner/02.jpg'}
          alt={'About Eilimi'}
          width={1200}
          height={1000}
          className='image'
        />
      }
    >
      <h2>About Eilimi</h2>
      <h1 style={{ fontSize: '2.25rem' }}>
        Business Is People; <br />
        If You Don’t Understand <br />
        <span>People, </span> <br />
        You Don't Understand <br />
        Business.
      </h1>
      <p>
        <strong>Eilimi</strong> is a Tech-driven Business Development Company
        specializingin customer behavior and Experience with the aim of
        empoweringstartups and corporations to grow. <br />At{' '}
        <strong>Eilimi</strong>
        , everything is methodological and market-centric. Consumer behavior and
        customer experience are managing all ourstrategies. <br />
      </p>
    </Slider>
  )
}

slider.propTypes = {}

export default slider
