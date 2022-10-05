import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';

function App() {
  const[todos,setTodos]=useState([
    {
      id:1,
      text:"할일 1",
      checked: true

    },
    {
      id:2,
      text:"할일 2",
      checked: false
    },
    {
      id:3,
      text: "할일 3",
      checked: true
    }
  ]);
  return (
   <div>
    <Template>
      <TodoList todos={todos}/>
    </Template>
   </div> 
  );
}

export default App;
