import React from 'react'
import PropTypes from 'prop-types'
import styles from './clients.module.scss'

const Clients = () => {
  return (
    <div className={styles.container}>
      <h3>
        <span>Our Clients.</span>
      </h3>
      <div className={styles.logos}>sa</div>
    </div>
  )
}

Clients.propTypes = {}

export default Clients
