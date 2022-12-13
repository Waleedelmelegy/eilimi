import React from 'react'
import Link from 'next/link'
import styles from '../styles.module.scss'
import Image from '../../../shared/images'
const Strategoies = ({ listings }) => {

  return (
    <div className={styles.container}>
      <h3 style={{ color: 'white', WebkitTextStrokeColor: 'black' }}>
        <span>{listings.name}</span>
      </h3>
      <p style={{ color: 'black'}}>{listings.description}</p>
      <div className={styles.services}>
        {listings?.sub_services?.map(i =>
          <div className={styles.block} key={i.id}>
            <Link href={`/our-services/${i.id}/${i.name.en.replaceAll(' ', '-').toLowerCase()}`} title={i.name.en}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${i.icon}`}
                alt={i.name.en}
                width={123}
                height={114}
                className='image'
              />
              <h4>
                {i.name.en}
              </h4>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Strategoies
