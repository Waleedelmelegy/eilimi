import React from 'react'
import PropTypes from 'prop-types'
import styles from './projectForm.module.scss'
import Button from '../../../shared/button/button'
import Maskblocks from '../../../shared/maskblocks'
const ProjectForm = () => {
  return (
    <div className={`bg-black ${styles.container}`}>
      <div className={styles.left}>
        <h3>
          Start your Next <span> Project</span> With us
        </h3>
        <p>
          <strong>Get In Touch</strong>
          Our team are eagerly waiting to help you growing your business. Please
          feel free to contact with us.
        </p>
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
            <label htmlFor='message'>Your Message </label>
            <textarea name='message' placeholder='' />
          </div>
          <div className='form-group w-100'>
            <Button className='fill' url={'/'} title='Submit' />
          </div>
        </div>
      </div>
      <div className={styles.mask}>
        <Maskblocks fill={'white'} />
      </div>
    </div>
  )
}
ProjectForm.propTypes = {}

export default ProjectForm
