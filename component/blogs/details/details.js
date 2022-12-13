import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './details.module.scss'
import Image from '../../../shared/images'
import Card from '../../../shared/card/card'

const Details = ({ post, posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>
        <ul>
          <li>
            <Link href={'/'} title='Home'>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/blogs'} title='blogs'>
              Blogs{' '}
            </Link>
          </li>
          <li>
            {post.title}
          </li>
        </ul>
      </div>
      <h1>
        {post.title}
      </h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={1000}
            className='image'
          />
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{
              __html: `${post.content}`
            }}
          />
        </div>
        <div className={styles.right}>
          <h3>Related Blogs</h3>
          {posts.map(item =>
            <div className={styles.card} key={item.id}>
              <Card
                hasImage={
                  <Image
                    src={`${item.image}`}
                    alt={item.title}
                    width={300}
                    height={250}
                    className='image'
                  />
                }
                title={item.title}
                url={`/blogs/${item.id}/${item.title.replaceAll(' ', '-')}`}
                type={'fill'}
                className={'mask'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Details.propTypes = {}

export default Details
