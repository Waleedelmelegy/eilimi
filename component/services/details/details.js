import React from 'react'
import Link from 'next/link'
import styles from './details.module.scss'
import Image from '../../../shared/images'

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
            {services.name}
          </li>
        </ul>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{
              __html: `${services.description}`
            }}
          />
        </div>
        <div className={styles.right}>
          <Image
            src={services.image}
            alt={services.name}
            width={1200}
            height={1000}
            className='image'
          />
        </div>
      </div>
    </div>
  )
}

export default Details
