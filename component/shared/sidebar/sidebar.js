import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from '../../../shared/images'
import Icon from '../../../shared/icon/Icon'

import styles from './sidebar.module.scss'
import { useTranslation } from 'next-i18next'

const Sidebar = ({ pathname }) => {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation('common')

  return (
    <header
      className={`${styles.container} ${showMenu
        ? styles.show
        : styles.closed}`}
    >
      <div className={styles.logo}>
        <Icon name='logo' fill={'#A81F24'} width={80} height={37} />
      </div>

      <div className={styles.menu}>
        <div
          className={styles.menuTriger}
          onClick={() => setShowMenu(prev => !prev)}
        >
          <span className={styles.burgerIcon} />
        </div>
        {showMenu &&
          <Fragment>
            <ul>
              <li>
                <Link href={'/'}>
                  <span className={`${pathname === '/' ? styles.active : ''}`}>
                    {t('link_Home')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/about-us'}>
                  <span
                    className={`${pathname === '/about-us'
                      ? styles.active
                      : ''}`}
                  >
                    {t('link_About')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/our-services'}>
                  <span
                    className={`${pathname === '/our-services'
                      ? styles.active
                      : ''}`}
                  >
                    {t('link_Services')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/solutions'}>
                  <span
                    className={`${pathname === '/solutions'
                      ? styles.active
                      : ''}`}
                  >
                    {t('link_Solutions')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/blogs'}>
                  <span
                    className={`${pathname === '/blogs' ? styles.active : ''}`}
                  >
                    {t('link_Blogs')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/careers'}>
                  <span
                    className={`${pathname === '/careers'
                      ? styles.active
                      : ''}`}
                  >
                    {t('link_Careers')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/contact-us'}>
                  <span
                    className={`${pathname === '/contact-us'
                      ? styles.active
                      : ''}`}
                  >
                    {t('link_Contact')}
                  </span>
                </Link>
              </li>
            </ul>
            <div className={styles.social}>
              <Link
                href={'https://www.facebook.com/eilimi'}
                title='Eilimi Facebook'
              >
                <Icon name='facebook' fill={'black'} width={37} height={37} />
              </Link>
              <Link
                href={'https://www.linkedin.com/company/eilimiconsulting/'}
                title='Eilimi LinkedIn'
              >
                <Icon name='linkedin' fill={'black'} width={44} height={37} />
              </Link>
              <Link
                href={'https://www.youtube.com/@eilimiconsulting8209'}
                title='Eilimi Youtube'
              >
                <Icon name='youtube' fill={'black'} width={53} height={37} />
              </Link>
              <Link href={'https://twitter.com/EilimiC'} title='Eilimi Twitter'>
                <Icon name='twitter' fill={'black'} width={46} height={37} />
              </Link>
              <Link
                href={'https://www.instagram.com/eilimiconsulting'}
                title='Eilimi Instgram'
              >
                <Icon name='instgram' fill={'black'} width={37} height={37} />
              </Link>
            </div>
          </Fragment>}
      </div>
    </header>
  )
}

Sidebar.propTypes = {}

export default Sidebar
