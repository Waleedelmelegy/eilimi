import React from 'react'
import PropTypes from 'prop-types'

const youtube = ({ width = 37, height = 37, fill = 'black' }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox='0 0 53 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M51.1152 5.7428C50.5148 3.48266 48.7463 1.70109 46.4992 1.09635C42.4293 3.88974e-07 26.1036 0 26.1036 0C26.1036 0 9.77798 3.88974e-07 5.70582 1.09635C3.4609 1.70109 1.69238 3.48048 1.092 5.7428C0 9.84106 0 18.39 0 18.39C0 18.39 0 26.9389 1.092 31.0372C1.69238 33.2973 3.4609 35.0789 5.70799 35.6837C9.77798 36.78 26.1036 36.78 26.1036 36.78C26.1036 36.78 42.4293 36.78 46.5014 35.6837C48.7463 35.0789 50.5148 33.2995 51.1174 31.0372C52.2072 26.9389 52.2072 18.39 52.2072 18.39C52.2072 18.39 52.2072 9.84106 51.1152 5.7428ZM20.7654 26.1537V10.6263L34.4089 18.39L20.7654 26.1537Z'
          fill={fill || 'black'}
        />
      </svg>
    </div>
  )
}

youtube.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default youtube
