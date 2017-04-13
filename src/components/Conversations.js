import classNames from 'classnames'
import React from 'react'

import styles from './Conversations.css'

/* Import user avatars with file-loader */
import cranstonAvatar from 'file-loader!../images/bryancranston.gif'
import ravenAvatar from 'file-loader!../images/rvn.jpg'
import rickyAvatar from 'file-loader!../images/btmnicon.jpg'

const Conversations = () =>

  <aside className={styles.conversations}>

    <nav className={styles.conversations__navbar}>
      <ul className={styles.conversations__navbar__list}>

        <li className={styles.conversations__navbar__listitem}>
          Open
          <div className={styles.arrow_down}></div>
        </li>

        <li className={classNames(styles.conversations__navbar__listitem, styles.conversations__navbar__listitemright)}>Date
          <div className={styles.arrow_down}></div>
        </li>

      </ul>
    </nav>

    <div className={styles.conversations__listcontainer}>
      <ul className={styles.conversations__list}>

        <li className={styles.conversations__listitem}>

          <input className={styles.conversations__listitem__checkbox} type="checkbox" name="checked" />

          <img className={styles.conversations__listitem__usericon} src={ravenAvatar} alt="User Icon" />

          <span className={styles.conversations__listitem__text}>Ravn0fSubrb</span>

        </li>

        <li className={classNames(styles.conversations__listitem, styles.conversation__listitem__active)}>

          <input className={styles.conversations__listitem__checkbox} type="checkbox" name="checked"/>

          <img className={styles.conversations__listitem__usericon} src={rickyAvatar} alt="User Icon"/>

          <span className={styles.conversations__listitem__text}>Ricky Fowler</span>

        </li>

        <li className={styles.conversations__listitem}>

          <input className={styles.conversations__listitem__checkbox} type="checkbox" name="checked"/>

          <img className={styles.conversations__listitem__usericon} src={cranstonAvatar} alt="User Icon"/>

          <span className={styles.conversations__listitem__text}>Bryan Cranston</span>

        </li>

      </ul>
    </div>

  </aside>


export default Conversations;
