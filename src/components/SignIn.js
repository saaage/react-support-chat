// sign in page for React-Support-Chat

import React from 'react'
import styles from './SignIn.css'

const SignIn = (props) => {
  return (
    <div className={styles.main}>
      <button onClick={props.onClick}>Log In</button>
    </div>
  )
}

export default SignIn;
