import React from 'react'
import PropTypes from 'prop-types'
import styles from './explore.module.scss'
import Image from '../../../shared/images'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
const Explore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h3>
            Explore <span>Eilimi</span>
          </h3>
          <p>
            <strong>
              Business Is People; <br />If You Don’t Understand People, <br />{' '}
              You Don't Understand Business.{' '}
            </strong>
            <br />
            <Button
              className='fill'
              url={'/about-us'}
              title='Start Expolore'
              hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
            />
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
        src={'/assets/banner/explore.jpg'}
        alt={'Explore Eilimi'}
        width={1200}
        height={1000}
        className='image'
      />
    </div>
  )
}

Explore.propTypes = {}

export default Explore
