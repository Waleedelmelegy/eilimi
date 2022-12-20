import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import Icon from '../icon/Icon'
import styles from './headerSolid.module.scss'
const headerSolid = ({ children }) => {
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
      <div className={styles.head}>
        {children}
      </div>
    </div>
  )
}

headerSolid.propTypes = {
  h1: PropTypes.element
}

export default headerSolid
