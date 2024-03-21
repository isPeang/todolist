import { useState } from 'react';
import '../App.css'
import { Button, Card, Input } from 'antd';

function TodoDayFour() {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(); //edit เป็น state ที่ใช้เก็บ idex ของรายการที่ต้องการแก้ไข

    function onCreate() {
        if (editIndex != null) { //ตรวจสอบว่าตอนนี้มีการแก้ไขรายการหรือไม่ จะทำการอัปเดต list ด้วยข้อมูลใหม่ที่ผู้ใช้ป้อนเข้ามาใน todo
            //ใช้ map method บน array list เพื่อสร้าง array ใหม่ newlist
            const newlist = list.map((item, index) => {
                //โดยที่แต่ละรายการใน array จะถูกเข้าถึงและประมวลผล ในแต่ละการวน loop เราจะตรวจสอบว่า index ของรายการนั้นเท่ากับ index ที่ต้องการแก้ไขหรือไม่
                if (index === editIndex)
                    return todo; //หากเท่ากันแสดงว่าเราต้องการแก้ไขรายการนี้ ดังนั้นเราจะ return todo ที่เป็นข้อมูลใหม่ที่ผู้ใช้ป้อนเข้ามา
                return item; //กรณีที่ไม่ตรงกับ index ที่ต้องการแก้ไข เราจะเป็นการ return รายการเดิมไปยัง array ใหม่
            })
            setList(newlist); //ได้ array ใหม่แก้ไขรายการสำเร็จแล้ว จะใช้ setList เพื่ออัปเดต state list ให้เป็น array ใหม่ที่มีการแก้ไขแล้ว
            setEditIndex(null); //ระบุว่าไม่มีการแก้ไขรายการใดๆ อยู่แล้ว และการแก้ไขเสร็จสมบูรณ์
        } else
            if (todo.length) setList([...list, todo]);
        setTodo('');
        console.log(list)
    }

    function onEdit(index) {
        const editValue = list.find((_, i) => i === index);
        if (editValue) setTodo(editValue);
        setEditIndex(index);
        console.log(index)
    }

    function onDelete(index) {
        const listDel = list.filter((_, i) => i !== index) //ถ้าไม่ใส่ _ ก็ลบไม่ได้ ? 
        setList(listDel);
    }

    return (

        <Card style={{ backgroundColor: 'pink'}}>
            <Input
                style={{justifyContent:'center', alignContent:'center',}}
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)} />
            {' '}
            <Button onClick={onCreate}>Create</Button>

            {list.map((list, index) =>
                <p key={index}>
                    {list}{' '}
                    <Button onClick={() => onEdit(index)}>Edit</Button>{' '}
                    <Button onClick={() => onDelete(index)}>Delete</Button>
                </p>
            )}
        </Card>

    );
};

export default TodoDayFour;