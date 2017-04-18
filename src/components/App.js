// App renders our components

import React from 'react'

import InterfaceContainer from './InterfaceContainer'
import styles from './App.css'

class App extends React.Component {

  render() {

    return(
      <div className={styles.appDiv}>
        <InterfaceContainer />
      </div>
    )
  }

}

export default App;
