import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './link.module.scss'

const Button = ({
  url,
  title = 'button',
  className = 'fill',
  hasIcon = ''
}) => {
  return (
    <Link
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
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Button
