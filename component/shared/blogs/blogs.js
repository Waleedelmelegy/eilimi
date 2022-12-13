import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../shared/icon/Icon'
import Button from '../../../shared/button/button'
import styles from './blogs.module.scss'
import Card from '../../../shared/card/card'
import Image from '../../../shared/images'

const Blog = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>
          Latest <br />
          <span>Blogs.</span>
        </h3>
        <p>
          Here you can get all the information you need to grow your business
          and figure out all the most interesting news about Technology and
          Business.
        </p>
        <Button
          url={'/blogs'}
          title={'See All Blogs'}
          className={'fill'}
          hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.scroller}>
          {posts.map(item =>
            <div className={styles.card} key={item.id}>
              <Card
                hasImage={
                  <Image
                    src={`${item.image}`}
                    alt={item.title}
                    width={385}
                    height={450}
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

Blog.propTypes = {}

export default Blog
