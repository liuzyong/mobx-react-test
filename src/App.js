import React from 'react'
import { Provider } from 'mobx-react'

import AppStore from './stores/appStore'
import DoList from './container/DoList'
const stores = { AppStore }

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <DoList/>
      </Provider>
    )

  }
}
