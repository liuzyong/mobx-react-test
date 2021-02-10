import { inject, observer } from 'mobx-react'
import React from 'react'
// import AppStore from '../stores/appStore'


@inject("AppStore") @observer
class DoList extends React.Component {
    render() {

        const { add, counter } = this.props.AppStore
        return (
            <div>
                <button onClick={add}>click me add</button><br></br>
                <button > {counter}</button>
            </div>

        )

    }
}
export default DoList; 