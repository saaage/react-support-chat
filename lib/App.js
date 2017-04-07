// App renders our single page application
// App will have a boolean state of signedIn. If user is not signedIn, we will render a Sign In page, if signedIn we will render the chat interface

import React from 'react'

import Navbar from './Navbar'

let Stefan = {
  userName: 'Obsidian911',
  mentions: 100,
  notifications: 200,
  pic: './docs/userimage.png'
}

class App extends React.Component {

  render() {
    return(
      <div>
        <Navbar userObj={Stefan} />
      </div>
    )
  }

}

export default App;
