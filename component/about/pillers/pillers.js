import React from 'react'
import PropTypes from 'prop-types'
import styles from './pillers.module.scss'
const pillers = () => {
  return (
    <div className={`bg-dark ${styles.container}`}>
      <h3>
        <span>Our Pillers</span>
      </h3>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h4>CUSTOMERS</h4>
          <p>
            Your business growth startsat understanding your customers’
            behavior, their needs,hope threats, and how theyperform against your
            offeringsand the competition offers aswell. Eilimi customer
            successpractice will boost your customeracquisition, development,
            and success through awell-woven methodologyfocusing on
            changemanagement, Life cyclemanagement, and utilization
          </p>
        </div>
        <div className={styles.box}>
          <h4>PEOPLE</h4>
          <p>
            It’s all about your people, so Eilimi devoted much time
            tounderstanding people and theirinteractions, communication,
            anddecision-making in the work-place and their generation-based
            behaviors.Eilimi programs secure theefficiency and effectiveness
            ofevery single role on your team.Your people are your DNA.
          </p>
        </div>
        <div className={styles.box}>
          <h4>PROCESS</h4>
          <p>
            No process, no measuresNo measure, no management,so no growth or
            success. theprocess matters. Eilimi willshape your business
            processand functional correlation forintegrity and synergy to
            secureyour growth continuity andenhance your correctivedecisions and
            business acumen.Let the process work for you andhave a more clear
            vision for yourbusiness.
          </p>
        </div>
        <div className={styles.box}>
          <h4>TECHNOLOGY</h4>
          <p>
            Technologies were made tochange how people coulddevote their mental
            resourcesto innovate and have a bet-ter lifestyle. The Eilimi teamis
            in the middle of everydaytechnologies, innovations, andbusiness
            applications that shiftyour business decision. Giveyour data its
            natural compoundeffect with a unique mix oftechnologies that made
            foryour current and near future requirements
          </p>
        </div>
      </div>
    </div>
  )
}

pillers.propTypes = {}

export default pillers
