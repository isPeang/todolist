import React from 'react';
import { Button, Input } from 'antd';

const InputPage = ({input, change, submitbtn}) => {
    return (
        <>
        <Input
        type='text'
        value={input}
        onChange={change}/>
        <Button onClick={submitbtn}>Create</Button>
        </>
    );
};

export default InputPage;