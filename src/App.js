import React from 'react'
import {observer, inject} from 'mobx-react'

@inject('appStore') @observer
export default class App extends React.Component{
  render(){
    const {add ,counter} = this.props.appStore
    return(
      <div>
        <button onClick={add}></button>
        <button > {counter}</button>
      </div>
    )
  }
}
