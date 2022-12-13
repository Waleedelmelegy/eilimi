import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from '../../../shared/icon/Icon'
import styles from './footer.module.scss'

const footer = () => {
  return (
    <footer className={`${styles.container} footer`}>
      <div className={styles.block1}>
        <h4>Quick Link</h4>
        <nav>
          <ul>
            <li>
              <Link href='/' title='Eilimi Home'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about-us' title='About Eilimi'>
                About
              </Link>
            </li>
            <li>
              <Link href='/our-services' title='our services'>
                Services
              </Link>
            </li>
            <li>
              <Link href='/blogs' title='Eilimi Blogs'>
                Blogs
              </Link>
            </li>
            <li>
              <Link href='/solutions' title='Eilimi Solutions'>
                Solutions
              </Link>
            </li>
            <li>
              <Link href='/careers' title='Eilimi Careers'>
                Careers
              </Link>
            </li>
            <li>
              <Link href='/contact-us' title='Eilimi Contact Us'>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.block2}>
        <h4>Contact</h4>
        <p>40 Yasmin Street, 1st New Cairo, Cairo Governorate</p>
        <p>
          <Link href={'tel:00201550509996'}>(+20)1550509996</Link>
        </p>
        <h4>About</h4>
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

footer.propTypes = {}

export default footer
