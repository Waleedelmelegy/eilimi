import React from 'react'
import Link from 'next/link'
import Icon from '../../../shared/icon/Icon'
import styles from './footer.module.scss'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <footer className={`${styles.container} footer`}>
      <div className={styles.block1}>
        <h4>
          {t('QuickLinks')}
        </h4>
        <nav>
          <ul>
            <li>
              <Link href='/' title='Eilimi Home'>
                {t('link_Home', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link href='/about-us' title='About Eilimi'>
                {t('link_About', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link href='/our-services' title='our services'>
                {t('link_Services', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link href='/solutions' title='Eilimi Solutions'>
                {t('link_Solutions', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link href='/blogs' title='Eilimi Blogs'>
                {t('link_Blogs', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link href='/careers' title='Eilimi Careers'>
                {t('link_Careers', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link href='/contact-us' title='Eilimi Contact Us'>
                {t('link_Contact', { ns: 'common' })}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.block2}>
        <h4>
          {t('Contact')}
        </h4>
        <p>
          {t('Address')}
        </p>
        <p>
          <Link href={'tel:00201550509996'}>
            {t('Phone')}
          </Link>
        </p>
        <h4>
          {t('About')}
        </h4>
        <div className={styles.social}>
          <Link
            href={'https://www.facebook.com/eilimi'}
            title='Eilimi Facebook'
          >
            <Icon name='facebook' fill={'#FAC213'} width={37} height={37} />
          </Link>
          <Link
            href={'https://www.linkedin.com/company/eilimiconsulting/'}
            title='Eilimi LinkedIn'
          >
            <Icon name='linkedin' fill={'#FAC213'} width={44} height={37} />
          </Link>
          <Link
            href={'https://www.youtube.com/@eilimiconsulting8209'}
            title='Eilimi Youtube'
          >
            <Icon name='youtube' fill={'#FAC213'} width={53} height={37} />
          </Link>
          <Link href={'https://twitter.com/EilimiC'} title='Eilimi Twitter'>
            <Icon name='twitter' fill={'#FAC213'} width={46} height={37} />
          </Link>
          <Link
            href={'https://www.instagram.com/eilimiconsulting'}
            title='Eilimi Instgram'
          >
            <Icon name='instgram' fill={'#FAC213'} width={37} height={37} />
          </Link>
        </div>
      </div>
      <div className={styles.block3}>
        <Icon name='logo' fill={'white'} width={300} height={150} />
      </div>
    </footer>
  )
}

export default Footer
