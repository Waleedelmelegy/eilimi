import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
import Slider from '../../../shared/slider/slider'
import Image from '../../../shared/images'

const slider = () => {
  return (
    <Slider
      hasImage={
        <Image
          src={'/assets/banner/01.jpg'}
          alt={'Eilimi Ai'}
          width={1200}
          height={1000}
          className='image'
        />
      }
    >
      <h1>
        you Grow <br />
        we <span> success.</span>
      </h1>
      <p>
        At Eilimi We are business developers, demand generators, problem
        solvers, and business automation and digital transformation experts. We
        deliver accurate results with predictable, measurable, and proven
        marketing, sales, andorganizational development strategies. <br />
        <Button
          className='fill'
          url={'/'}
          title='Start Expolore'
          hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
        />
      </p>
    </Slider>
  )
}

slider.propTypes = {}

export default slider
