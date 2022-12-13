import React from 'react'
import PropTypes from 'prop-types'
import styles from './commitment.module.scss'
import Image from '../../../shared/images'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
const Commitment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h3>
            Our Commitment <br />to the <span>world</span>
          </h3>
          <p>
            <strong>
              Tailored Innovative business solutions with immersive customer
              experience at allbrand touchpoints to empower brand recalland
              conversions
            </strong>
            <br />
          </p>
        </div>
        <Image
          src={'/assets/masks/mask-left.svg'}
          alt={'About Eilimi'}
          width={100}
          height={100}
          className='image'
        />
      </div>
      <Image
        src={'/assets/banner/commitment.jpg'}
        alt={'Eilimi Commitment'}
        width={1200}
        height={1000}
        className='image'
      />
    </div>
  )
}

Commitment.propTypes = {}

export default Commitment
