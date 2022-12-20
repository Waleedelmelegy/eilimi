import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../component/shared/footer/footer'
import Banner from '../component/about/banner/banner'
import SideBar from '../component/shared/sidebar/sidebar'
import Journey from '../component/about/journey/journey'
import OurDNA from '../component/about/our-dna/ourDNA'
import OurPillers from '../component/about/pillers/pillers'
import Brands from '../component/shared/brands/brands'
import { useRouter } from 'next/router'

import Commitment from '../component/about/commitment/commitment'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About = ({ locale }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - About Us</title>
        <meta
          name='description'
          content='We are business developers, demand generators, problem solvers, and business automation and digital transformation experts.'
        />
        <meta property='og:title' content='Eilimi - About Us' key='title' />
        <meta
          property='og:description'
          content='We are business developers, demand generators, problem solvers, and business automation and digital transformation experts.'
          key='description'
        />
        <meta
          property='og:url'
          content={`https://www.eilimi.ai/${locale}/about-us`}
          key='url'
        />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link
          rel='canonical'
          href={`https://www.eilimi.ai/${locale}/about-us`}
        />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <SideBar pathname={pathname} />
        <main className='main'>
          <Banner />
          <Brands />
          <Journey />
          <OurDNA />
          <OurPillers />
          <Commitment />
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
        'about-us'
      ])),
      locale: direction
    }
  }
}

export default About
