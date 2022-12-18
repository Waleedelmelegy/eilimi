import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './link.module.scss'

const Buttons = ({
  url = '',
  title = 'button',
  className = 'fill',
  hasIcon = '',
  type = ''
}) => {
  return type === 'submit'
    ? <button className={`${styles.link} ${styles[className]}`}>
      {title}{' '}
      {hasIcon &&
      <span className={styles.icon}>
        {hasIcon}
      </span>}
    </button>
    : <Link
      className={`${styles.link} ${styles[className]}`}
      href={url}
      title={title}
      >
      {title}{' '}
      {hasIcon &&
      <span className={styles.icon}>
        {hasIcon}
      </span>}
    </Link>
}

Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Buttons
