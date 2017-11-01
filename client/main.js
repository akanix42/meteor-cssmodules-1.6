import React from 'react'
import { render } from 'react-dom'

import styles from '/imports/app.css'

const App = () => <div className={styles.app}> hey</div>

Meteor.startup(() => {
  render(<App />, document.getElementById('app'))
})
