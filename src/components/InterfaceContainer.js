// InterfaceContainer will be a stateful component that renders a <SignIn /> component if a user is not signed in and the app componenets if a user is signedIn

import ActiveConversation from './ActiveConversation'
import Conversations from './Conversations'
import React from 'react'
import SignIn from './SignIn'
import UserNavbar from './UserNavbar'

import styles from './InterfaceContainer.css'
import userImage from 'file-loader!../images/userimage.png'

let Stefan = {
  userName: 'Stefan Age',
  mentions: 100,
  notifications: 200,
  pic: userImage
}

class InterfaceContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn() {
    this.setState({
      loggedIn: true,
      user: Stefan
    });
  }

  signOut() {
    this.setState({
      loggedIn: false,
      user: null
    })
  }

  render() {

    const isLoggedIn = this.state.loggedIn;

    if(isLoggedIn){
      return(
        <div className={styles.interfaceContainer}>
          <UserNavbar userObj={this.state.user} onClick={this.signOut} />
          <Conversations />
          <ActiveConversation />
        </div>
      )
    } else {
      return (
        <SignIn onClick={this.signIn} />
      )
    }

  }
}

export default InterfaceContainer;
