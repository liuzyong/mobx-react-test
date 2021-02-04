import React from 'react'
import {Router, browseHistory} from 'react-router'
import {Provider} from 'mobx-react'

import App from '../App'
import AppStore from '../stores/appStore'

const stores ={AppStore}

export default ()=>(
    <Provider {...stores}>
        <Router history={browseHistory}>
            <Route path="/" component={App}> 
                <IndexRoute component={App}></IndexRoute>
            </Route>
        </Router>
    </Provider>
);