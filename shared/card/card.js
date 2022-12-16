import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '../button/button'
import Icon from '../icon/Icon'
import styles from './card.module.scss'
const card = ({
  hasImage,
  title,
  url,
  type = 'fill',
  className = '',
  button = 'Read'
}) => {
  return (
    <div className={styles.container}>
      <Link href={url} title={title}>
        <div className={styles[className]}>
          {hasImage}
        </div>
        <h4>
          <span>
            {title}
          </span>
        </h4>
      </Link>
      <div className={styles.readmore}>
        <Button
          url={url}
          title={button}
          className={type === 'transparent' ? 'transparent' : 'fill'}
          hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
        />
      </div>
    </div>
  )
}

card.propTypes = {
  title: PropTypes.string.isRequired,
  hasImage: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
}

export default card
