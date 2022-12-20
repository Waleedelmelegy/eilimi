import React from 'react'
import Link from 'next/link'
import Icon from '../../shared/icon/Icon'
import styles from './information.module.scss'
const Information = () => {
  return (
    <div className={styles.container}>
      <p>
        Having the shortest possible delay between idea and launch is crucialin
        business.
      </p>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h4>Address</h4>
          <span>40 Yasmin Street, 1st New Cairo, Cairo Governorate</span>
        </div>
        <div className={styles.box}>
          <h4>Work Inquiries</h4>
          <span>
            Interested in working with us?{' '}
            <Link href={'mailto:grow@eilimi.ai'} title='grow@eilimi.ai'>
              grow@eilimi.ai
            </Link>
          </span>
        </div>
        <div className={styles.box}>
          <h4>Phone</h4>
          <span>
            Ph{' '}
            <Link href={'tel:01550509996'} title='Phone'>
              01550509996
            </Link>
          </span>
        </div>
      </div>

      <div className={styles.follow}>
        <h3>Follow Us</h3>
        <div className={styles.social}>
          <Link
            href={'https://www.facebook.com/eilimi'}
            title='Eilimi Facebook'
          >
            <Icon name='facebook' width={66} height={66} />
          </Link>
          <Link
            href={'https://www.linkedin.com/company/eilimiconsulting/'}
            title='Eilimi LinkedIn'
          >
            <Icon name='linkedin' width={77} height={66} />
          </Link>
          <Link
            href={'https://www.youtube.com/@eilimiconsulting8209'}
            title='Eilimi Youtube'
          >
            <Icon name='youtube' width={94} height={66} />
          </Link>
          <Link href={'https://twitter.com/EilimiC'} title='Eilimi Twitter'>
            <Icon name='twitter' width={82} height={66} />
          </Link>
          <Link
            href={'https://www.instagram.com/eilimiconsulting'}
            title='Eilimi Instgram'
          >
            <Icon name='instgram' width={66} height={66} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Information
