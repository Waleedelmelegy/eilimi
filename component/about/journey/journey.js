import React from 'react'
import styles from './journey.module.scss'
import Image from '../../../shared/images'
const journey = () => {
  return (
    <div className={`bg-dark ${styles.container}`}>
      <div className={styles.left}>
        <h3>
          Our <br />
          <span>Journey</span>
        </h3>
        <p>
          <strong>Eilimi</strong> seeks to bridge the gap between strategy and
          action through technology. We&apos;re pioneers in business
          development, demand generation, problem-solving, automation, and{' '}
          <strong>digital transformation.</strong>
        </p>
      </div>
      <div className={styles.right}>
        <Image
          src={'/assets/banner/journy.svg'}
          alt={'Eilimi Journy'}
          width={1200}
          height={1000}
          className='image'
        />
      </div>
    </div>
  )
}

export default journey
