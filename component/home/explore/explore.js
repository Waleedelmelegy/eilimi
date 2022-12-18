import React from 'react'
import styles from './explore.module.scss'
import Image from '../../../shared/images'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
import { useTranslation } from 'next-i18next'

const Explore = () => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h3>
            Explore <span>Eilimi</span>
          </h3>
          <p>
            Eilimi seeks to bridge the gap between strategy and action through
            technology. When it comes to business transformation, we give you
            proper outcomes that tackle all stipulated business objectives.
            We're pioneers in business development, demand generation, problem
            solving, automation, and digital transformation. Our marketing,
            sales, and organizational development techniques provide you with
            accurate results. At Eilimi, everything is methodological and
            market-centric as consumer behavior is managing our strategies all
            the time. We believe in; Business is people. If you don’t understand
            people, you don’t understand business. As no one size fits all, no
            case is similar to another; we have to figure out a new way of doing
            things every time.
            <br />
            <Button
              className='fill'
              url={'/about-us'}
              title={t('StartExplore')}
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

export default Explore
