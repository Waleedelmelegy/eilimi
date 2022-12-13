import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ourDNA.module.scss'
const ourDNA = () => {
  return (
    <div className={styles.container}>
      <h3>
        Eilimi <span>DNA</span>
      </h3>
      <div className={styles.links}>
        <Link className={styles.round} href={'/'} title='Strategies'>
          <Image
            src={'/assets/ser-icon-01.svg'}
            alt='Eilimi Strategies'
            width={163}
            height={130}
          />
          <h4>Strategies</h4>
        </Link>
        <Link className={styles.round} href={'/'} title='Digitize'>
          <Image
            src={'/assets/ser-icon-02.svg'}
            alt='Eilimi Digitize'
            width={163}
            height={152}
          />
          <h4>Digitize</h4>
        </Link>
        <Link className={styles.round} href={'/'} title='Monetize'>
          <Image
            src={'/assets/ser-icon-03.svg'}
            alt='Eilimi Monetize'
            width={163}
            height={152}
          />
          <h4>Monetize</h4>
        </Link>
      </div>
    </div>
  )
}

ourDNA.propTypes = {}

export default ourDNA
