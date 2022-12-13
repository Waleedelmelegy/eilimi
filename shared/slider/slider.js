import React, { Children } from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import styles from './slider.module.scss'
import Icon from '../icon/Icon'
import Mask from '../mask'
const slider = ({ children, hasImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.touch}>
        <Button
          className='outline'
          url={'tel:00201550509996'}
          title='Get In Touch'
          hasIcon={
            <Icon width={13} height={13} name={'call'} fill={'#FAC213'} />
          }
        />
      </div>
      <div className={styles.content}>
        {children}
        <div className={styles.mask}>
          <Mask fill={'#302F36'} />
        </div>
      </div>
      {hasImage}
    </div>
  )
}

slider.propTypes = {
  children: PropTypes.array
}

export default slider
