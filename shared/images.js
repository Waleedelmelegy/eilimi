import React from 'react'
import Image from 'next/image'

import PropTypes from 'prop-types'

const images = ({ src, width, height, alt, className = '' }) => {
  return (
    <Image
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
      title={alt}
    />
  )
}

images.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired
}

export default images
