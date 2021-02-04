import React from 'react';
import ReactDOM from 'react-dom';
// import { types, getSnapshot } from "mobx-state-tree";


import App from './App';


// const Todo = types.model({
//   name: types.optional(types.string, ""),
//   done: types.optional(types.boolean, false)
// })
// .actions(self =>{
//   function setName(newName){
//     self.name = newName
//   }
//   function toggle(){
//     self.done = !self.done
//   }

//   return {setName, toggle}
// })

// const User = types.model({
//   name: types.optional(types.string, ""),
// })

// const RootStore = types.model({
//   users: types.map(User),
//   todos: types.optional(types.map(Todo),{})
// })
// .actions(self =>{
//   function addTodo(id, name){
//     self.todos.set(id,Todo.create({name: name}))
//   }

//   return {addTodo}
// })

// const store = RootStore.create({
//   users:{}
// })

// const eat = Todo.create({ name: "eat", done: 1 })

// store.addTodo(0, "Eat a cake")
// store.todos.get(0).toggle()

// console.log(getSnapshot(store))

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

