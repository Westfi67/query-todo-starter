import './App.css'

import { List } from './components/List';
import { Item } from './components/Item';
import { NewTodo } from './components/NewTodo';



function App() {
  return (
    <>
      <h1>Another boring todo app</h1>

      <List />
      <Item id={1} />
      <Item id={2} />
      <NewTodo />
    </>
  )
}

export default App
