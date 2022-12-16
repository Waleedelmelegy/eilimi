import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../../../component/shared/footer/footer'
import HeaderSolid from '../../../shared/header-solid/headerSolid'
import SideBar from '../../../component/shared/sidebar/sidebar'
import { useRouter } from 'next/router'
import ProjectForm from '../../../component/shared/project-form/projectForm'
import { apiSSR } from '../../../utility/api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Details from '../../../component/blogs/details/details'
const Slug = ({ post, posts }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Fragment>
      <Head>
        <title>Eilimi - Blogs</title>
        <meta name='description' content='Eilimi' />
        <meta property='og:title' content='Eilimi Ai' key='title' />
        <meta
          property='og:description'
          content='Eilimi Blogs'
          key='description'
        />
        <meta property='og:url' content='https://www.eilimi.ai/' key='url' />
        <meta property='og:image' content='/assets/logo.svg' key='image' />
        <link rel='apple-touch-icon' href='/assets/logo.svg' />
        <link rel='canonical' href='https://www.eilimi.ai/blogs' />
      </Head>
      <SideBar pathname={pathname} />

      <div className='container'>
        <main className='main'>
          <HeaderSolid>
            <h1>
              Latest <span> &nbsp;Blogs.</span>
            </h1>
          </HeaderSolid>
          <Details post={post} posts={posts} />
          <ProjectForm />
          <Footer />
        </main>
      </div>
    </Fragment>
  )
}

export const getServerSideProps = async ctx => {
  const [post, posts] = await Promise.all([
    apiSSR(
      'singleBlog',
      JSON.stringify({ lang: ctx.locale, id: ctx.params.id }),
      'POST'
    ),
    apiSSR('blogs', null, 'GET')
  ])
  const direction = ctx.locale
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common', 'footer'])),
      post: post.status === 200 && post.data ? post.data[0] : [],
      posts:
        posts.status === 200 && posts.data
          ? posts.data.sort(() => Math.random() - 0.5).slice(0, 4)
          : [],
      locale: direction
    }
  }
}

export default Slug
