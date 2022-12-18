import React, { useState, useEffect } from 'react'
import styles from './clients.module.scss'
import { apiSSR } from '../../../utility/api'
import Image from '../../../shared/images'

const Clients = () => {
  const [clients, setClinets] = useState({})
  useEffect(() => {
    apiSSR('client', null, 'GET').then(respnse => {
      setClinets(respnse.data)
    })
  }, [])
  return (
    <div className={styles.container}>
      <h3>
        <span>Our Clients.</span>
      </h3>
      <div className={styles.logos}>
        {clients.length > 0 &&
          clients.map(i =>
            <div key={i.key}>
              <Image
                src={i.image}
                alt={'Eilimi Clinets'}
                width={100}
                height={100}
                className='image'
              />
            </div>
          )}
      </div>
    </div>
  )
}

export default Clients
