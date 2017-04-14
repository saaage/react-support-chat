import classNames from 'classnames'
import React from 'react'

import styles from './ActiveConversation.css'

const ActiveConversation = () =>

<section className={styles.activeConversation}>

  <nav className={styles.activeConversation__navbar}>
    <ul className={styles.activeConversation__navbar__list}>
      <li className={styles.activeConversation__navbar__listitem}>Unassigned<div className={styles.arrow_down}></div></li>
      <li className={classNames(styles.activeConversation__navbar__listitem, styles.activeConversation__navbar__clientname)}>Ricky Fowler</li>
      <li className={classNames(styles.activeConversation__navbar__listitem, styles.activeConversation__navbar__listitemright)}><i className="fa fa-close"></i> Close</li>
    </ul>
  </nav>

  <div className={styles.activeConversation__chat}>


        <div className={styles.activeConversation__chat__window}>

          <div className={styles.activeConversation__chat__conversation}>
            <div className={styles.activeConversation__chat__received}>
              <p className={styles.activeConversation__chat__messagereceived}>Nice to meet you!</p>
            </div>
            <div className={styles.activeConversation__chat__sent}>
              <p className={styles.activeConversation__chat__messagesent}>What happened at the Masters?!</p>
            </div>
            <div className={styles.activeConversation__chat__received}>
              <p className={styles.activeConversation__chat__messagereceived}>Wasn't my year</p>
            </div>
            <div className={styles.activeConversation__chat__sent}>
              <p className={styles.activeConversation__chat__messagesent}>Ramps tofu do occaecat, unicorn roof party glossier. Tumeric ex iceland, assumenda waistcoat tacos meggings iPhone asymmetrical cronut odio kinfolk. Put a bird on it kale chips narwhal, fixie eu artisan vero post-ironic meditation umami art party health goth lyft flannel vegan. Enamel pin post-ironic la croix, next level shabby chic incididunt vaporware. Intelligentsia organic ullamco dolor chartreuse plaid chambray ugh ea butcher accusamus. Tilde gochujang vinyl deep v, incididunt humblebrag kogi biodiesel banh mi esse typewriter iceland tbh kickstarter. Truffaut lo-fi everyday carry, commodo pop-up selvage woke ennui franzen iceland tofu occaecat small batch tilde.</p>
            </div>
          </div>

      </div>

    <form className={styles.activeConversation__chatform} action="index.html" method="post">
      <textarea className={styles.activeConversation__chat__input} placeholder="Reply..."></textarea>
      <button className={styles.activeConversation__chat__sendbutton} type="button" Name={styles.button}>Send</button>
    </form>
  </div>

</section>


export default ActiveConversation;
