import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const maskblocks = ({ fill }) => {
  return (
    <Fragment>
      <svg
        width='1340'
        height='776'
        viewBox='0 0 1340 776'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M177.69 757.94C177.69 732.017 228.59 595.986 347.978 658.451C440.48 446.611 613.105 438.468 687.854 460.876C753.446 234.463 943.17 235.755 1029.83 264.702C1041.51 164.502 1101.8 -27.9692 1339.5 3.41865L1339.5 775.919L44.9102 775.919L-3.39165e-05 775.919C30 724.919 85.6552 703.308 177.69 757.94Z'
          fill={fill}
          fillOpacity='0.04'
        />
      </svg>
    </Fragment>
  )
}

maskblocks.propTypes = {}

export default maskblocks
