import logo from './logo.svg';
import './App.css';
import { Button, Input, Card, Form } from 'antd';
import { useState } from 'react';

import InputPage from './InputPage';
import ButtonPage from './ButtonPage';

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();



  return (
    <>
    <h1>Hello</h1>
    </>
  );
}

export default App;
