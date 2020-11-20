import React from 'react';
import './App.css';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import {Provider} from 'react-redux'
import {store} from './components/redux/store'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <TodoInput/>
        <TodoList/>

      </Provider>
      
    </div>
  );
}

export default App;
