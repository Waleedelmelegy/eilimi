import React from 'react'
import PropTypes from 'prop-types'

const facebook = ({ width = 37, height = 37, fill = 'black' }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox='0 0 37 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M37 18.5C37 27.733 30.2259 35.3874 21.3829 36.7765V23.8835H25.6826L26.5012 18.5493H21.3829V15.0883C21.3829 13.6283 22.0982 12.2069 24.3892 12.2069H26.7155V7.66517C26.7155 7.66517 24.6035 7.30442 22.5854 7.30442C18.3705 7.30442 15.6171 9.85896 15.6171 14.4824V18.5478H10.932V23.882H15.6171V36.7749C6.77563 35.3843 0 27.7315 0 18.5C0 8.28337 8.28338 0 18.5 0C28.7166 0 37 8.28183 37 18.5Z'
          fill={fill || 'black'}
        />
      </svg>
    </div>
  )
}

facebook.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default facebook
