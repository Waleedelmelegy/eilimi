import React from 'react'
import styles from './information.module.scss'
import Card from '../../shared/card/card'
import Image from '../../shared/images'
const Information = ({ posts }) => {
  return (
    <div className={styles.container}>
      <p>
        Eilimi Here you can get all the information you need to grow your
        business and figure out all the most interesting news about Technology
        and Business.
      </p>
      <div className={styles.card}>
        {posts.map(item =>
          <div className={styles.cardContainer} key={item.id}>
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
              url={`/blogs/${item.id}/${item.title
                .replaceAll(' ', '-')
                .substring(0, 90)}`}
              type={'fill'}
              className={'mask'}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Information
