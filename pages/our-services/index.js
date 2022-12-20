import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../../component/shared/footer/footer'
import SideBar from '../../component/shared/sidebar/sidebar'
import HeaderSolid from '../../shared/header-solid/headerSolid'
import ProjectForm from '../../component/shared/project-form/projectForm'
import Strategoies from '../../component/services/strategize/strategoies'
import Digitalize from '../../component/services/digitalize/digitalize'
import { useRouter } from 'next/router'
import Monetize from '../../component/services/monetize/monetize'
import { apiSSR } from '../../utility/api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Services = ({ services, locale }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - Our Services</title>
        <meta
          name='description'
          content='The Eilimi team is in the middle of everyday technologies, innovations, and business applications that shift your business decision. Discover Our Services Now.'
        />
        <meta property='og:title' content='Eilimi - Our Services' key='title' />
        <meta
          property='og:description'
          content='The Eilimi team is in the middle of everyday technologies, innovations, and business applications that shift your business decision. Discover Our Services Now.'
          key='description'
        />
        <meta
          property='og:url'
          content={`https://www.eilimi.ai/${locale}/our-services`}
          key='url'
        />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link
          rel='canonical'
          href={`https://www.eilimi.ai/${locale}/our-services`}
        />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <SideBar pathname={pathname} />
        <main className='main'>
          <HeaderSolid>
            <h1>
              Our&nbsp;<span> Services. </span>
            </h1>
          </HeaderSolid>
          <Strategoies
            listings={services.filter(i => i.name === 'Strategize')[0]}
          />
          <Digitalize
            listings={services.filter(i => i.name === 'Digitalize')[0]}
          />
          <Monetize listings={services.filter(i => i.name === 'Monetize')[0]} />
          <ProjectForm />
          <Footer />
        </main>
      </div>
    </Fragment>
  )
}
export const getServerSideProps = async ctx => {
  const [response] = await Promise.all([apiSSR('services', null, 'GET')])
  const direction = ctx.locale

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common', 'footer'])),
      services: response.status === 200 && response.data ? response.data : [],
      locale: direction
    }
  }
}

export default Services
