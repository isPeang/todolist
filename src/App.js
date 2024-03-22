import logo from './logo.svg';
import './App.css';
import { Button, Input,Card  } from 'antd';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [editID, setEdit] = useState();

  function onCreate() {
    if (editID != null) {
      const newList = list.map((items, index) => {
        if (index === editID) return todo;
        return items;
      })
      setList(newList);
      setEdit(null); //ระบุว่าไม่มีการแก้ไขใดๆแล้ว
    } else
      if (todo.length) setList([...list, todo]);
    setTodo('');
    console.log(list)
  }

  function onEdit(index) {
    const findEdit = list.find((_, i) => i == index);
    if (findEdit) setTodo(findEdit)
    setEdit(index);
  }

  function onDelete(index) {
    const deleted = list.filter((_, i) => i !== index);
    setList(deleted);
  }

  return (
    <div style={{textAlign:'center',  padding: '30px'}}>  
      <Card title='To-do List' style={{margin: '50px', backgroundColor:'pink'}}>
      <Input
        type='text'
        value={todo}
        onChange={e => setTodo(e.target.value)} 
        style={{margin: '16px', width:'300px', borderStyle: 'groove'}}/>
      <Button onClick={onCreate}>Create</Button>

      {list.map((list, index) =>
        <p key={index}>
          {list} {' '}
          <Button onClick={() => onEdit(index)} >Edit</Button> {' '}
          <Button onClick={() => onDelete(index)} style={{backgroundColor:'red', color:'white'}}>Delete</Button>
        </p>
      )}
      </Card>
    </div>
  );
}

export default App;
