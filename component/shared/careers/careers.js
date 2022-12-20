import React, { useState } from 'react'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
import styles from './careers.module.scss'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Formik } from 'formik'
import { apiSSR } from '../../../utility/api'

const Careers = () => {
  const router = useRouter()
  const { pathname } = router
  const { t } = useTranslation('careers')
  const [file, setFile] = useState({})
  return (
    <div className={styles.container}>
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
        <h3
          dangerouslySetInnerHTML={{
            __html: `${t('JoinFamily')}`
          }}
        />
        <strong>
          {t('JoinTalented')}
        </strong>
        <p>
          {t('Desc')}
        </p>
        {/* {pathname !== '/careers' &&
          <Button
            className='fill'
            url={'/'}
            title={t('JoinUs')}
            hasIcon={
              <Icon
                width={13}
                height={13}
                name={'arrow-right'}
                fill={'black'}
              />
            }
          />} */}
      </div>

      <div className={styles.right}>
        <div className={styles.block}>
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              email: '',
              phone: '',
              coverLatter: ''
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
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
                apiSSR(
                  'careers',
                  JSON.stringify({
                    name: values.firstname.concat(values.lastname),
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    file: file,
                    coverLatter: values.coverLatter
                  }),
                  'POST'
                ).then(res => {
                  if (res.status === 200) {
                    toast.success(res.msg)
                    resetForm()
                    setFile({})
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
                  <label htmlFor='firstname'>
                    {t('FirstName')}
                  </label>
                  <input
                    type='text'
                    name='firstname'
                    placeholder={t('FirstName')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                  />
                  <span className={styles.errors}>
                    {errors.firstname && touched.firstname && errors.firstname}
                  </span>
                </div>
                <div className='form-group w-48'>
                  <label htmlFor='lastname'>
                    {t('LastName')}
                  </label>
                  <input
                    type='text'
                    name='lastname'
                    placeholder={t('LastName')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                  />
                  <span className={styles.errors}>
                    {errors.lastname && touched.lastname && errors.lastname}
                  </span>
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='phone'>
                    {t('PhoneNumber')}
                  </label>
                  <input
                    type='number'
                    name='phone'
                    placeholder={t('PhoneNumber')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <span className={styles.errors}>
                    {errors.phone && touched.phone && errors.phone}
                  </span>
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='email'>
                    {t('EMail')}
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder={t('EMail')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className={styles.errors}>
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='cv'>
                    {t('CV')}
                  </label>
                  <input
                    type='file'
                    name='cv'
                    placeholder={t('CV')}
                    onChange={e => setFile(e.target.value)}
                  />
                </div>
                <div className='form-group w-100'>
                  <label htmlFor='email'>
                    {t('CoverLater')}
                  </label>
                  <textarea
                    name='coverLatter'
                    placeholder=''
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.coverLatter}
                  />
                </div>
                <div className='form-group w-100'>
                  <Button
                    className='fill'
                    title={t('Submit')}
                    type={'submit'}
                    disabled={isSubmitting}
                  />
                </div>
              </form>}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Careers
