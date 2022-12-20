import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../../component/shared/footer/footer'
import HeaderSolid from '../../shared/header-solid/headerSolid'
import SideBar from '../../component/shared/sidebar/sidebar'
import { useRouter } from 'next/router'
import Information from '../../component/blogs/information'
import ProjectForm from '../../component/shared/project-form/projectForm'
import { apiSSR } from '../../utility/api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Blogs = ({ posts, locale }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - Blogs</title>
        <meta
          name='description'
          content='Eilimi Blogs, Here you can get all the Information you need to grow your business and figure out all the the most interesting news about Technology and Business.'
        />
        <meta property='og:title' content='Eilimi - Blogs' key='title' />
        <meta
          property='og:description'
          content='Eilimi Blogs, Here you can get all the Information you need to grow your business and figure out all the the most interesting news about Technology and Business.'
          key='description'
        />
        <meta
          property='og:url'
          content={`https://www.eilimi.ai/${locale}/blogs`}
          key='url'
        />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link rel='canonical' href={`https://www.eilimi.ai/${locale}/blogs`} />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <main className='main'>
          <HeaderSolid>
            <h1>
              Latest&nbsp;<span>Blogs. </span>
            </h1>
          </HeaderSolid>
          <Information posts={posts} />
          <ProjectForm />

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
      ...(await serverSideTranslations(ctx.locale, ['common', 'footer'])),
      posts: posts.status === 200 && posts.data ? posts.data : [],
      locale: direction
    }
  }
}
export default Blogs
