import React from 'react'
import Image from '../../../shared/images'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
import styles from './services.module.scss'

const services = () => {
  return (
    <div className={`bg-black ${styles.container}`}>
      <div className={styles.content}>
        <h3>
          Our <br />
          <span>Services</span>
        </h3>
        <p>
          <strong>Eilimi</strong> seeks to bridge the gap between strategy and
          action through technology. We're pioneers in business development,
          demand generation, problem-solving, automation, and{' '}
          <strong>digital transformation.</strong>
          <Button
            className='fill'
            url={'/our-services'}
            title='Expolore Services'
            hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
          />
        </p>
      </div>
      <div className={styles.content}>
        <Image
          src={'/assets/services/services-img.png'}
          width={652}
          height={724}
          alt='Eilimi Services'
        />
      </div>
    </div>
  )
}

export default services
