import React from 'react'
import styles from './InterfaceContainer.css'
import Conversations from './Conversations'
import ActiveConversation from './ActiveConversation'
import UserNavbar from './UserNavbar'
import userImage from 'file-loader!../images/userimage.png'

let Stefan = {
  userName: 'Stefan Age',
  mentions: 100,
  notifications: 200,
  pic: userImage
}

const InterfaceContainer = () =>

  <div className={styles.interfaceContainer}>
    <UserNavbar userObj={Stefan} />
    <Conversations />
    <ActiveConversation />
  </div>


export default InterfaceContainer;
