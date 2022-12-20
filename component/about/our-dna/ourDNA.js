import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ourDNA.module.scss'
import { useTranslation } from 'next-i18next'
const OurDNA = () => {
  const { t } = useTranslation('about-us')
  return (
    <div className={styles.container}>
      <h3 dangerouslySetInnerHTML={{ __html: `${t('EilimiDNA')}` }} />
      <div className={styles.links}>
        <Link className={styles.round} href={'/'} title='Strategies'>
          <Image
            src={'/assets/ser-icon-01.svg'}
            alt='Eilimi Strategies'
            width={163}
            height={130}
          />
          <h4>
            {t('Strategies')}
          </h4>
        </Link>
        <Link className={styles.round} href={'/'} title='Digitize'>
          <Image
            src={'/assets/ser-icon-02.svg'}
            alt='Eilimi Digitize'
            width={163}
            height={152}
          />
          <h4>
            {t('Digitize')}
          </h4>
        </Link>
        <Link className={styles.round} href={'/'} title='Monetize'>
          <Image
            src={'/assets/ser-icon-03.svg'}
            alt='Eilimi Monetize'
            width={163}
            height={152}
          />
          <h4>
            {t('Monetize')}
          </h4>
        </Link>
      </div>
    </div>
  )
}

export default OurDNA
