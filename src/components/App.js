// App renders our components
// App will have a boolean state of signedIn. If user is not signedIn, App will render a sign-in page, if signedIn App will render the chat interface

import React from 'react'

import UserNavbar from './UserNavbar'

let Stefan = {
  userName: 'Stefan Age',
  mentions: 100,
  notifications: 200,
  pic: '../images/userimage.png'
}

class App extends React.Component {

  render() {
    return(
      <div>
        <UserNavbar userObj={Stefan} />
      </div>
    )
  }

}

export default App;
