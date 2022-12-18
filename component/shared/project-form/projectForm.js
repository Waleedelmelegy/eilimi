import React, { useEffect, useState } from 'react'
import styles from './projectForm.module.scss'
import Button from '../../../shared/button/button'
import Maskblocks from '../../../shared/maskblocks'
import { Formik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { apiSSR } from '../../../utility/api'

const ProjectForm = () => {
  const [services, setServices] = useState({})
  const [selectedServices, setSelectedServices] = useState({})

  useEffect(() => {
    apiSSR('services', null, 'GET').then(respnse => {
      setServices(respnse.data)
      setSelectedServices(respnse.data[0].id)
    })
  }, [])
  return (
    <div className={`bg-black ${styles.container}`}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
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
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              email: '',
              phone: '',
              message: ''
            }}
            validate={values => {
              const errors = {}
              if (!values.email) {
                errors.email = 'Required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              } else if (!values.firstname) {
                errors.firstname = 'Required'
              } else if (!values.lastname) {
                errors.lastname = 'Required'
              } else if (!values.phone) {
                errors.phone = 'Required'
              } else if (!values.message) {
                errors.message = 'Required'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
                apiSSR(
                  'contactUs',
                  JSON.stringify({
                    name: values.firstname.concat(values.lastname),
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    service_id: selectedServices
                  }),
                  'POST'
                ).then(res => {
                  if (res.status === 200) {
                    toast.success(res.msg)

                    resetForm()
                  } else {
                    toast.warn('Please fix missing data')
                  }
                })
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) =>
              <form onSubmit={handleSubmit}>
                <div className='form-group w-48'>
                  <label htmlFor='firstname'>First Name</label>
                  <input
                    type='text'
                    name='firstname'
                    placeholder='first name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                  />
                  <span className={styles.errors}>
                    {errors.firstname && touched.firstname && errors.firstname}
                  </span>
                </div>
                <div className='form-group w-48'>
                  <label htmlFor='lastname'>Last Name</label>
                  <input
                    type='text'
                    name='lastname'
                    placeholder='last name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                  />
                  <span className={styles.errors}>
                    {errors.lastname && touched.lastname && errors.lastname}
                  </span>
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='phone'>Phone Number </label>
                  <input
                    type='number'
                    name='phone'
                    placeholder='Phone Number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <span className={styles.errors}>
                    {errors.phone && touched.phone && errors.phone}
                  </span>
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='email'>E-mail </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='E-Mail'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className={styles.errors}>
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='message'>Services </label>
                  <select
                    name='services'
                    placeholder=''
                    onChange={e => setSelectedServices(e.target.value)}
                    onBlur={handleBlur}
                    value={values.services}
                  >
                    {services.length > 0 &&
                      services.map(i =>
                        <option value={i.id} key={i.id}>
                          {i.name}
                        </option>
                      )}
                  </select>
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='message'>Your Message </label>
                  <textarea
                    name='message'
                    placeholder=''
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                </div>
                <div className='form-group w-100'>
                  <Button
                    className='fill'
                    title='Submit'
                    disabled={isSubmitting}
                    type={'submit'}
                  />
                </div>
              </form>}
          </Formik>
        </div>
      </div>
      <div className={styles.mask}>
        <Maskblocks fill={'white'} />
      </div>
    </div>
  )
}

export default ProjectForm
