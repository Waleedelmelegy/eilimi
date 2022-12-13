import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './details.module.scss'
import Image from '../../../shared/images'
import Card from '../../../shared/card/card'

const Details = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>
        <ul>
          <li>
            <Link href={'/'} title='Home'>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/our-services'} title='Our Services'>
              Sevices{' '}
            </Link>
          </li>
          <li>
            {services.title}
          </li>
        </ul>
      </div>
      <h1>
        {services.title}
      </h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            src={services.image}
            alt={services.title}
            width={1200}
            height={1000}
            className='image'
          />
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{
              __html: `${services.content}`
            }}
          />
        </div>
      </div>
    </div>
  )
}

Details.propTypes = {}

export default Details
