import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  type Todo = {

    inputValue: String
    id: Number
    checked: Boolean
  }
  return (
    <div className="App">
      <div>
        <h2>
          TODO list with Typescript
          <form onSubmit={() => {}}>
            <input type="text" onChange={() => {}} className='inputText'/>
            <input type="submit" value="Submit" className='submitButton' />
          </form>
        </h2>
      </div>
    </div>
  );
}

export default App;
