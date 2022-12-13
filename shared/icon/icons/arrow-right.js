import React from 'react'
import PropTypes from 'prop-types'

const arrowRight = ({ width = 37, height = 37, fill = 'black' }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox='0 0 12 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 6.5L0.75 12.9952L0.750001 0.00480889L12 6.5Z'
          fill={fill || 'black'}
        />
      </svg>
    </div>
  )
}

arrowRight.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default arrowRight
