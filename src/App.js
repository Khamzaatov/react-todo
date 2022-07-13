import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Todos from './components/Todos'
import './style.css'

function App() {
  const defaultTodos = [
    {
      text : 'Покушать шаурму',
      completed : false,
    },

    {
      text : 'Купить Мерседес Майбах',
      completed : false 
    },

    {
      text : 'Выучить JavaScript',
      completed : false 
    },
  ]

  const [todos, setTodos] = useState(defaultTodos)
  const [text, setText] = useState('')

  const checkTodo = (id) => {
    const check = todos.map((el, index) => {
       if (id === index) {
        return {
          ...el, completed : !el.completed
        }
      }
      return el
    })
    setTodos(check)
  }

  const deleteTodo = (id) => {
    const remove = todos.filter((el, index) => {
      if (id === index) {
        return false
      }
      return true
    })
    setTodos(remove)
  }
  
  const addTodo = () => {
    setTodos([ {
      text : text,
      completed: false
    },
    ...todos])

    setText('')
  }
  
  

  return (
    <div className="App">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo}/>
      <Todos deleteTodo={deleteTodo} checkTodo={checkTodo} todos={todos}/>
    </div>
  );
}

export default App;
