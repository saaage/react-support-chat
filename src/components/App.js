// App renders our components
// App will have a boolean state of signedIn. If user is not signedIn, App will render a sign-in page, if signedIn App will render the chat interface

import React from 'react'

import InterfaceContainer from './InterfaceContainer'
import styles from './App.css'
import UserNavbar from './UserNavbar'
import userImage from 'file-loader!../images/userimage.png'

let Stefan = {
  userName: 'Stefan Age',
  mentions: 100,
  notifications: 200,
  pic: userImage
}

class App extends React.Component {

  render() {
    return(
      <div>
        <UserNavbar userObj={Stefan} />
        <InterfaceContainer />
      </div>
    )
  }

}

export default App;
