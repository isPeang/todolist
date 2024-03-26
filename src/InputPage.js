import { useState } from 'react';
import './App.css';
import { Button, Input } from 'antd';

function InputPage({ value, onChange, onCreate}) {


    return (
    <div>
        <Input
            type='text'
            value={value}
            onChange={e => {onChange(e);
                console.log(e.target.value);}} 
            style={{ margin: 10, width: 500 }}
            placeholder='Type something you wanna do today'
        />

        <Button onClick={onCreate}>Create</Button>
    </div>
    )
}

export default InputPage;
