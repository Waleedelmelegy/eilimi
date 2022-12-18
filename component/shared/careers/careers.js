import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
import styles from './careers.module.scss'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Careers = () => {
  const router = useRouter()
  const { pathname } = router
  const { t } = useTranslation('careers')

  return (
    <div className={styles.container}>
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
        {pathname !== '/careers' &&
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
          />}
      </div>

      <div className={styles.right}>
        <div className={styles.block}>
          <div className='form-group w-48'>
            <label htmlFor='firstname'>
              {t('FirstName')}
            </label>
            <input type='text' name='firstname' placeholder={t('FirstName')} />
          </div>
          <div className='form-group w-48'>
            <label htmlFor='lastname'>
              {t('LastName')}
            </label>
            <input type='text' name='lastname' placeholder={t('LastName')} />
          </div>
          <div className='form-group w-100'>
            <label htmlFor='phone'>
              {t('PhoneNumber')}
            </label>
            <input type='number' name='phone' placeholder={t('PhoneNumber')} />
          </div>
          <div className='form-group w-100'>
            <label htmlFor='email'>
              {t('EMail')}
            </label>
            <input type='email' name='email' placeholder={t('EMail')} />
          </div>
          <div className='form-group w-100'>
            <label htmlFor='cv'>
              {t('CV')}
            </label>
            <input type='file' name='cv' placeholder={t('CV')} />
          </div>
          <div className='form-group w-100'>
            <Button className='fill' url={'/'} title={t('Submit')} />
          </div>
        </div>
      </div>
    </div>
  )
}

Careers.propTypes = {}

export default Careers
