import React from 'react'
import styles from './brands.module.scss'
import Card from '../../../shared/card/card'
import Image from '../../../shared/images'
import { useTranslation } from 'next-i18next'

const Brands = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.container}>
      <h3>
        Our <span>Brands</span>
      </h3>
      <div className={styles.brands}>
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
            button={t('StartExplore')}
          />
        </div>
        <div className={styles.cards}>
          <Card
            hasImage={
              <Image
                src={'/assets/brands/divein.jpg'}
                alt={'DiveIN App'}
                width={500}
                height={500}
                className='image'
              />
            }
            title={'DiveIN App'}
            url={'/'}
            type='transparent'
            className={'image'}
            button={t('StartExplore')}
          />
        </div>
        <div className={styles.cards}>
          <Card
            hasImage={
              <Image
                src={'/assets/brands/911.jpg'}
                alt={'911 App'}
                width={500}
                height={500}
                className='image'
              />
            }
            title={'911 App'}
            url={'/'}
            type='transparent'
            className={'image'}
            button={t('StartExplore')}
          />
        </div>
      </div>
    </div>
  )
}

export default Brands
