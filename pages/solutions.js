import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../component/shared/footer/footer'
import HeaderSolid from '../shared/header-solid/headerSolid'
import SideBar from '../component/shared/sidebar/sidebar'
import Brands from '../component/shared/brands/brands'
import ProjectForm from '../component/shared/project-form/projectForm'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Solutions = ({ locale }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - Solutions</title>
        <meta
          name='description'
          content=' Eilimi creats customized solutions that best dif your business. You can sustain your competitive edge with our solutions; existence or created from scratch for you.'
        />
        <meta property='og:title' content='Eilimi Solutions' key='title' />
        <meta
          property='og:description'
          content='Eilimi Eilimi creats customized solutions that best dif your business. You can sustain your competitive edge with our solutions; existence or created from scratch for you.'
          key='description'
        />
        <meta
          property='og:url'
          content={`https://www.eilimi.ai/${locale}/solutions`}
          key='url'
        />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link
          rel='canonical'
          href={`https://www.eilimi.ai/${locale}/solutions`}
        />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <main className='main'>
          <HeaderSolid>
            <h1>
              <span>Solutions</span>
            </h1>
          </HeaderSolid>
          <Brands />
          <ProjectForm />
          <Footer />
        </main>
      </div>
    </Fragment>
  )
}

export const getServerSideProps = async context => {
  const direction = context.locale

  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'footer'])),
      locale: direction
    }
  }
}

export default Solutions
