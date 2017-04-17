// App renders our components
// App will have a boolean state of signedIn. If user is not signedIn, App will render a sign-in page. If signedIn, App will render the chat interface

import React from 'react'

import InterfaceContainer from './InterfaceContainer'
import styles from './App.css'

let signedIn;

class App extends React.Component {

  signedIn: false

  constructor(props) {
    super(props);
    this.state = signedIn;
  }

  render() {
    return(
      <div className={styles.appDiv}>
        <InterfaceContainer />
      </div>
    )
  }

}

export default App;
