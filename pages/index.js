import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../component/shared/footer/footer'
import Banner from '../component/home/banner/banner'
import SideBar from '../component/shared/sidebar/sidebar'

import Services from '../component/shared/services/services'
import Brands from '../component/shared/brands/brands'
import { useRouter } from 'next/router'
import Blogs from '../component/shared/blogs/blogs'
import Careers from '../component/shared/careers/careers'
import { apiSSR } from '../utility/api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'

import Explore from '../component/home/explore/explore'
import Testimonial from '../component/home/testimonial/testimonial'
import Clients from '../component/home/clients/clients'

const Home = ({ posts }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi</title>
        <meta name='description' content='Eilimi' />
        <meta property='og:title' content='Eilimi Ai' key='title' />
        <meta property='og:description' content='Eilimi' key='description' />
        <meta property='og:url' content='https://www.eilimi.ai/' key='url' />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link rel='canonical' href='https://www.eilimi.ai/' />
      </Head>
      <div className='container'>
        <SideBar pathname={pathname} />
        <main className='main'>
          <Banner />
          <Brands />
          <Services />
          <Explore />
          <Blogs posts={posts} />
          <Clients />
          <Testimonial />
          <Careers />
          <Footer />
        </main>
      </div>
    </Fragment>
  )
}
export const getServerSideProps = async ctx => {
  const [posts] = await Promise.all([apiSSR('blogs', null, 'GET')])
  const direction = ctx.locale

  return {
    props: {
      ...(await serverSideTranslations(
        ctx.locale,
        ['common', 'footer', 'careers'],
        nextI18NextConfig
      )),
      posts:
        posts.status === 200 && posts.data
          ? posts.data.sort(() => Math.random() - 0.5).slice(0, 4)
          : [],
      locale: direction
    }
  }
}

export default Home
