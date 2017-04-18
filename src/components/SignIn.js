// Sign In component for RSC

import React from 'react'
import classNames from 'classnames'

import styles from './SignIn.css'

const SignIn = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.signInContainer}>
        <button className={styles.signInContainer__loginButton} onClick={props.onClick}>Log In</button>
      </div>
    </div>
  )
}

export default SignIn;
