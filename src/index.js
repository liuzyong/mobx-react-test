import React from 'react';
import ReactDOM from 'react-dom';
import { types } from "mobx-state-tree";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Todo = types.model({
  name: types.optional(types.string, ""),
  done: types.optional(types.boolean, false)
})

const User = types.model({
  name: types.optional(types.string, ""),
})

const RootStore = types.model({
  users: types.map(User),
  todos: types.optional(types.map(Todo),{})

})

const store = RootStore.create({
  // users:{}
})

// const john = User.create({name:"ant"})
// const eat = Todo.create()
// console.log("John",john.toJSON())
// console.log("eat",eat.toJSON())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
