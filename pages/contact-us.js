import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../component/shared/footer/footer'
import HeaderSolid from '../shared/header-solid/headerSolid'
import SideBar from '../component/shared/sidebar/sidebar'
import { useRouter } from 'next/router'
import Information from '../component/contact-us/information'
import ProjectForm from '../component/shared/project-form/projectForm'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ContactUs = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - Contact Us</title>
        <meta name='description' content='Eilimi' />
        <meta property='og:title' content='Eilimi Ai' key='title' />
        <meta property='og:description' content='Eilimi' key='description' />
        <meta property='og:url' content='https://www.eilimi.ai/' key='url' />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link rel='canonical' href='https://www.eilimi.ai/' />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <main className='main'>
          <HeaderSolid>
            <h1>
              <span>Contact </span>&nbsp;Us
            </h1>
          </HeaderSolid>
          <Information />
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
      ...(await serverSideTranslations(context.locale, ['common'])),
      locale: direction
    }
  }
}

export default ContactUs
