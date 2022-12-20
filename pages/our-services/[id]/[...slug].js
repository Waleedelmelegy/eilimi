import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../../../component/shared/footer/footer'
import SideBar from '../../../component/shared/sidebar/sidebar'
import HeaderSolid from '../../../shared/header-solid/headerSolid'
import ProjectForm from '../../../component/shared/project-form/projectForm'

import { useRouter } from 'next/router'

import { apiSSR } from '../../../utility/api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Details from '../../../component/services/details/details'

const Slug = ({ services, locale }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>
          Eilimi - {services.name}
        </title>
        <meta
          property='og:title'
          content={`Eilimi ${services.name}`}
          key='title'
        />
        <meta
          name='description'
          content={`Eilimi ${services.description
            .replace(/<[^>]*>?/gm, '')
            .substring(0, 140)}}`}
        />

        <meta
          property='og:description'
          content={`Eilimi ${services.description
            .replace(/<[^>]*>?/gm, '')
            .substring(0, 140)}`}
          key='description'
        />
        <meta
          property='og:url'
          content={`https://www.eilimi.ai/${locale}/${services.id}/${services.url}`}
          key='url'
        />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link
          rel='canonical'
          href={`https://www.eilimi.ai/${locale}/${services.id}/${services.name.replace(
            ' ',
            '-'
          )}`}
        />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <SideBar pathname={pathname} />
        <main className='main'>
          <HeaderSolid>
            {/* <h2>Strategize</h2> */}
            <h1>
              {services.name}
            </h1>
          </HeaderSolid>
          <Details services={services} />
          <ProjectForm />
          <Footer />
        </main>
      </div>
    </Fragment>
  )
}

export const getServerSideProps = async ctx => {
  const [response] = await Promise.all([
    apiSSR(
      'SubServiceDetails',
      JSON.stringify({ lang: ctx.locale, id: ctx.params.id }),
      'POST'
    )
  ])
  const direction = ctx.locale
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common', 'footer'])),
      services:
        response.status === 200 && response.data ? response.data[0] : [],
      locale: direction
    }
  }
}

export default Slug
