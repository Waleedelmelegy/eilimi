import React from 'react'
import PropTypes from 'prop-types'
import styles from './testimonial.module.scss'
import Image from '../../../shared/images'

const Testimonial = () => {
  return (
    <div className={`bg-dark ${styles.container}`}>
      <h3>
        <span>Testimonial</span>
      </h3>
      <div className={styles.testimonial}>
        <div className={styles.block}>
          "I got impressed with Eilimi's communication and support, and their
          24/7 customer success program is unique and fantastic. Their training
          and coaching methodology added great value to my team. Their hands-on
          experience in the gulf region helped us in hard times. With Eilimi, we
          have saved our investment in a short time thanks to their consultation
          services."
          <div className={styles.signuture}>
            <Image
              src={'/assets/testimonial/thamer.png'}
              alt={'About Eilimi'}
              width={114}
              height={114}
              className='image'
            />
            <div className={styles.content}>
              <span>Dr. Thamer Abo-Ghaliah</span>
              <label>CEO - Ensan Arabia</label>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          "I got impressed with Eilimi's communication and support, and their
          24/7 customer success program is unique and fantastic. Their training
          and coaching methodology added great value to my team. Their hands-on
          experience in the gulf region helped us in hard times. With Eilimi, we
          have saved our investment in a short time thanks to their consultation
          services."
          <div className={styles.signuture}>
            <span>Dr. Thamer Abo-Ghaliah</span>
            <label>CEO - Ensan Arabia</label>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.propTypes = {}

export default Testimonial
