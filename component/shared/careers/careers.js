import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
import styles from './careers.module.scss'
import { useRouter } from 'next/router'

const Careers = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>
          Join Our <br />
          <span>Family</span>
        </h3>
        <strong>Join The Talented Group</strong>
        <p>
          Eilimi is more than a company, We are Family, If you wanna Know about
          Us or join us, Fill out the form.
        </p>
        {pathname !== '/careers' &&
          <Button
            className='fill'
            url={'/'}
            title='Join Us'
            hasIcon={
              <Icon
                width={13}
                height={13}
                name={'arrow-right'}
                fill={'black'}
              />
            }
          />}
      </div>

      <div className={styles.right}>
        <div className={styles.block}>
          <div className='form-group w-48'>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' name='firstname' placeholder='first name' />
          </div>
          <div className='form-group w-48'>
            <label htmlFor='lastname'>Last Name</label>
            <input type='text' name='lastname' placeholder='last name' />
          </div>
          <div className='form-group w-100'>
            <label htmlFor='phone'>Phone Number </label>
            <input type='number' name='phone' placeholder='Phone Number' />
          </div>
          <div className='form-group w-100'>
            <label htmlFor='email'>E-mail </label>
            <input type='email' name='email' placeholder='E-Mail' />
          </div>
          <div className='form-group w-100'>
            <label htmlFor='cv'>CV </label>
            <input type='file' name='cv' placeholder='CV' />
          </div>
          <div className='form-group w-100'>
            <Button className='fill' url={'/'} title='Submit' />
          </div>
        </div>
      </div>
    </div>
  )
}

Careers.propTypes = {}

export default Careers
