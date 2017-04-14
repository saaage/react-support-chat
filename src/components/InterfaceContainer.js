import React from 'react'
import styles from './InterfaceContainer.css'
import Conversations from './Conversations'
import ActiveConversation from './ActiveConversation'

const InterfaceContainer = () =>

  <div className={styles.interfaceContainer}>
    <Conversations />
    <ActiveConversation />
  </div>


export default InterfaceContainer;
