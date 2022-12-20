import React from 'react'
import styles from './testimonial.module.scss'
import Image from '../../../shared/images'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Testimonial = () => {
  return (
    <div className={`bg-dark ${styles.container}`}>
      <h3>
        <span>Testimonial</span>
      </h3>
      <div className={styles.testimonial}>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={styles.block}>
              <div className={styles.border}>
                “I got impressed with Eilimi&apos;s communication and support,
                and their 24/7 customer success program is unique and fantastic.
                Their training and coaching methodology added great value to my
                team. Their hands-on experience in the gulf region helped us in
                hard times. With Eilimi, we have saved our investment in a short
                time thanks to their consultation services.”
                <div className={styles.signuture}>
                  <Image
                    src={'/assets/testimonial/thamer.png'}
                    alt={'About Eilimi'}
                    width={114}
                    height={114}
                    className='image'
                  />
                  <div className={styles.content}>
                    <h6>Dr. Thamer Abo-Ghaliah</h6>
                    <label>CEO - Ensan Arabia</label>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.block}>
              <div className={styles.border}>
                “Eilimi team helped our business growth objectives. They
                diversify our revenue streams with a great business approach. I
                felt sometimes that they are Docuserv team, not Eilimi team.
                their problem solving techniques are amazing. I wish them all
                the success”
                <div className={styles.signuture}>
                  <div className={styles.content}>
                    <h6>Mohamed Mourad</h6>
                    <label>Managing Director – Docuserv</label>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.block}>
              <div className={styles.border}>
                “I am writing this to thank eilimi consulting team for the
                professional support. During the last two months, all the key
                points of the go-to-market plan were clear, we had the knowledge
                ready and got prepared to conquer the market. With your
                professional guidance and support, we will successfully pass the
                challenges. We would highly recommend any company that has
                problems with Growth plans certainly consult Eilimi. Again,
                thank you so much for all the help”
                <div className={styles.signuture}>
                  <div className={styles.content}>
                    <h6>Mohamed Abdelmoniem</h6>
                    <label>Educational Solutions Specialist - oktopi</label>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.block}>
              <div className={styles.border}>
                “For one year and a half, I have enjoyed doing business with
                eilimi team. they are precise, dedicated, and very talented.
                Their capability to establish, nourish and develop business is
                impressive. With eilimi, we have added a software business unit
                to our operation successfully. Thanks to their training
                programs, our team is equipped with all that it takes to develop
                our business.”
                <div className={styles.signuture}>
                  <div className={styles.content}>
                    <h6>Amal Hamdy</h6>
                    <label>Commercial Director – Docuserv</label>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.block}>
              <div className={styles.border}>
                “Elimi is the best choice and decision we have made when
                choosing it as our main consultant and advisor in the Egyptian
                market and global one also, they took their time understanding
                our needs and goals closely, they came out with a lot of
                marketing plans as well as rapid growth plans, providing us with
                a clear transparent strategy, Elimi gave us more than we asked
                for so far,”
                <div className={styles.signuture}>
                  <div className={styles.content}>
                    <h6>Sherif Fathy </h6>
                    <label>Sales Manager - oktopi</label>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
