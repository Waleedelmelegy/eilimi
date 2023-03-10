import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../component/shared/footer/footer'
import HeaderSolid from '../shared/header-solid/headerSolid'
import SideBar from '../component/shared/sidebar/sidebar'
import Career from '../component/shared/careers/careers'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Careers = ({ locale }) => {
  const router = useRouter()
  const { pathname } = router
  const { t } = useTranslation('carrers')

  return (
    <Fragment>
      <Head>
        <title>Eilimi - Careers</title>
        <meta
          name='description'
          content='Eilimi is more than a company | We are Family. Join Our Family. You can join us now by filling out the form on our Careers Page.'
        />
        <meta property='og:title' content='Eilimi - Careers' key='title' />
        <meta
          property='og:description'
          content='Eilimi is more than a company | We are Family. Join Our Family. You can join us now by filling out the form on our Careers Page.'
          key='description'
        />
        <meta
          property='og:url'
          content={`https://www.eilimi.ai/${locale}/careers`}
          key='url'
        />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link
          rel='canonical'
          href={`https://www.eilimi.ai/${locale}/careers`}
        />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <main className='main'>
          <HeaderSolid>
            <h1>
              <span>
                {t('Careers')}{' '}
              </span>
            </h1>
          </HeaderSolid>
          <Career />

          <Footer />
        </main>
      </div>
    </Fragment>
  )
}

export const getServerSideProps = async ctx => {
  const direction = ctx.locale

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, [
        'common',
        'footer',
        'careers'
      ])),
      locale: direction
    }
  }
}

export default Careers
