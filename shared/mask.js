import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const mask = ({ fill }) => {
  return (
    <Fragment>
      <svg
        width='1115'
        height='965'
        viewBox='0 0 1115 965'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M540.964 842C522.464 842 425.385 805.683 469.963 720.5C318.783 654.5 312.972 531.333 328.963 478C167.383 431.2 168.305 295.833 188.963 234C117.455 225.667 -19.9612 166.6 2.43881 -3H1115.44V964.5H611.463C569.963 964.5 501.976 907.666 540.964 842Z'
          fill='url(#paint0_linear_45_2170)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_45_2170'
            x1='413.439'
            y1='103.5'
            x2='1164.94'
            y2='1196'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={fill} />
            <stop offset='1' stopColor={fill} stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </Fragment>
  )
}

mask.propTypes = {}

export default mask
