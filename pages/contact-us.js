import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../component/shared/footer/footer'
import HeaderSolid from '../shared/header-solid/headerSolid'
import SideBar from '../component/shared/sidebar/sidebar'
import { useRouter } from 'next/router'
import Information from '../component/contact-us/information'
import ProjectForm from '../component/shared/project-form/projectForm'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ContactUs = ({ locale }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - Contact Us</title>
        <meta property='og:title' content='Eilimi - Contact Us' key='title' />
        <meta
          name='description'
          content='Contact Us Now and we will get back to you as soon as possible …'
        />
        <meta
          property='og:description'
          content='Contact Us Now and we will get back to you as soon as possible …'
          key='description'
        />
        <meta
          property='og:url'
          content={`https://www.eilimi.ai/${locale}/contact-us`}
          key='url'
        />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link
          rel='canonical'
          href={`https://www.eilimi.ai/${locale}/contact-us`}
        />
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
      ...(await serverSideTranslations(context.locale, ['common', 'footer'])),
      locale: direction
    }
  }
}

export default ContactUs
