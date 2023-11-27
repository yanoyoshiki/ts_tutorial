import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setinputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // make new todo list
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setinputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const NewTodos = todos.map((todo) => {
      if (todo.id == id){
        todo.inputValue = inputValue;
      };
      return todo;
    });
    setTodos(NewTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const NewTodos = todos.map((todo) => {
      if (todo.id == id){
        todo.checked = !checked;
      };
      return todo;
    });
    setTodos(NewTodos);
  };

  const handeldelete = (id: number) => {
    const NewTodos = todos.filter((todo) => todo.id !== id);
    setTodos(NewTodos);
  };

  
  return (
    <div className="App">
      <div>
        <h2>TODO list with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className='inputText'/>
          <input type="submit" value="Submit" className='submitButton' />
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key = {todo.id}>
              <input 
              type="text" 
              onChange={(e) => handleEdit(todo.id, e.target.value)} 
              className='inputText'
              value={todo.inputValue}
              disabled = {todo.checked}
              />
              <input 
              type="checkbox" 
              onChange={(e) => handleChecked(todo.id,todo.checked)}
              />
              <button onClick = {() => handeldelete(todo.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
