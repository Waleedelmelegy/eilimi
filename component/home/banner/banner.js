import React from 'react'
import Button from '../../../shared/button/button'
import Icon from '../../../shared/icon/Icon'
import Sliders from '../../../shared/slider/slider'
import Image from '../../../shared/images'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useTranslation } from 'next-i18next'

const Slider = () => {
  const { t } = useTranslation('common')

  return (
    <Carousel
      showThumbs={false}
      autoPlay
      showArrows
      interval='3000'
      infiniteLoop
    >
      <Sliders
        hasImage={
          <Image
            src={'/assets/banner/01.jpg'}
            alt={'Eilimi Ai'}
            width={1200}
            height={1000}
            className='image'
          />
        }
      >
        <h1>
          you Grow <br />
          we <span> success.</span>
        </h1>
        <p>
          At Eilimi We are business developers, demand generators, problem
          solvers, and business automation and digital transformation experts.
          We deliver accurate results with predictable, measurable, and proven
          marketing, sales, andorganizational development strategies. <br />
          <Button
            className='fill'
            url={'/about-us'}
            title={t('StartExplore')}
            hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
          />
        </p>
      </Sliders>
      <Sliders
        hasImage={
          <Image
            src={'/assets/banner/home-02.jpg'}
            alt={'Eilimi Ai'}
            width={1200}
            height={1000}
            className='image'
          />
        }
      >
        <h1>
          From Ideation <br />
          To <span> Success.</span>
        </h1>
        <p>
          From curating a winning Business Model to a successful Monetization
          plan, Eilimi is your companion throughout your journey. Digitalization
          is digested as well. Enjoy your success journey with us <br />
          <Button
            className='fill'
            url={'/about-us'}
            title={t('StartExplore')}
            hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
          />
        </p>
      </Sliders>
      <Sliders
        hasImage={
          <Image
            src={'/assets/banner/home-03.jpg'}
            alt={'Eilimi Ai'}
            width={1200}
            height={1000}
            className='image'
          />
        }
      >
        <h1>
          Business Is <br />
          <span> People.</span>
        </h1>
        <p>
          If You Don&apos;t Understand People, You Don&apos;t Understand
          Business so customer experience really matters. <br />
          <Button
            className='fill'
            url={'/about-us'}
            title={t('StartExplore')}
            hasIcon={<Icon width={13} height={13} name={'arrow-right'} />}
          />
        </p>
      </Sliders>
    </Carousel>
  )
}

export default Slider
