import React from 'react'
import PropTypes from 'prop-types'
import styles from './brands.module.scss'
import Card from '../../../shared/card/card'
import Image from '../../../shared/images'
const brands = () => {
  return (
    <div className={styles.container}>
      <h3>
        Our <span>Brands</span>
      </h3>
      <div className={styles.cards}>
        <Card
          hasImage={
            <Image
              src={'/assets/brands/clinicsapp.jpg'}
              alt={'Clinic App'}
              width={500}
              height={500}
              className='image'
            />
          }
          title={'Clinic App'}
          url={'https://www.clinicsapp.net/'}
          type='transparent'
          className={'image'}
          button='Start Explore'
        />
      </div>
    </div>
  )
}

brands.propTypes = {}

export default brands
