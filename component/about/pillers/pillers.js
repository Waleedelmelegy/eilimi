import React from 'react'
import styles from './pillers.module.scss'
import { useTranslation } from 'next-i18next'
const Pillers = () => {
  const { t } = useTranslation('about-us')
  return (
    <div className={`bg-dark ${styles.container}`}>
      <h3>
        <span>
          {t('OurPillers')}
        </span>
      </h3>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h4>CUSTOMERS</h4>
          <p>
            Your business growth startsat understanding your customers’
            behavior, their needs,hope threats, and how theyperform against your
            offeringsand the competition offers aswell. Eilimi customer success
            practice will boost your customer acquisition, development, and
            success through awell-woven methodology focusing on change
            management, Life cycle management, and utilization
          </p>
        </div>
        <div className={styles.box}>
          <h4>PEOPLE</h4>
          <p>
            It’s all about your people, so Eilimi devoted much time tounder
            standing people and their interactions, communication, and decision
            making in the work-place and their generation based behaviors.
            Eilimi programs secure the efficiency and effectiveness of every
            single role on your team. Your people are your DNA.
          </p>
        </div>
        <div className={styles.box}>
          <h4>PROCESS</h4>
          <p>
            No process, no measures No measure, no management,so no growth or
            success. the process matters. Eilimi will shape your business
            processand functional correlation forintegrity and synergy to secure
            your growth continuity and enhance your corrective decisions and
            business acumen.Let the process work for you and have a more clear
            vision for yourbusiness.
          </p>
        </div>
        <div className={styles.box}>
          <h4>TECHNOLOGY</h4>
          <p>
            Technologies were made tochange how people could devote their mental
            resourcesto innovate and have a bet-ter lifestyle. The Eilimi teamis
            in the middle of every day technologies, innovations, and business
            applications that shift your business decision. Give your data its
            natural compound effect with a unique mix of technologies that made
            for your current and near future requirements
          </p>
        </div>
      </div>
    </div>
  )
}
export default Pillers
