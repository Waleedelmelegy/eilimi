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

const About = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - About Us</title>
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
      ...(await serverSideTranslations(ctx.locale, ['common', 'footer'])),
      locale: direction
    }
  }
}

export default About
