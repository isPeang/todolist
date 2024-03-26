import { useState } from 'react';
import './App.css';
import InputPage from './InputPage';
import ListPage from './ListPage';

function App() {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);

  const onCreate = () => {
    // setList([...list ,{ id: Date.now(), text: todo}])
    setList([...list ,todo])
    console.log(list);
    setTodo("");
  }

  return (
    <>
      <InputPage
        value={todo} //ส่งข้อมูลไปให้ child component
        onChange={e => setTodo(e.target.value)}
        onCreate={onCreate}/>
      <ListPage 
        list={list}/>
    </>
  );
}

export default App;
