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

  function onCreate() {
    if (edit != null) {
      const newList = list.map((items, index) => {
        if (index === edit) return todo;
        return items;
      })
      setList(newList);
      setEdit(null); //ระบุว่าไม่มีการแก้ไขใดๆแล้ว
    } else
      if (todo.length) setList([...list, todo]);
    setTodo('');
    console.log(list)
  }

  return (
    <>
      <Card title='Todo list' style={{ textAlign: 'center' }}>
        <InputPage value={todo} onChange={e => setTodo(e.target.value)} onCreate={onCreate}/>
        <ButtonPage/>
      </Card>
    </>
  );
}

export default App;
