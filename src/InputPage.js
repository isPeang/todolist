import { Button, Input } from "antd";
import { useState } from 'react';

function InputPage({ value, onChange, onCreate }) {
    return (
        <>
            <Input
                type="text"
                value={value}
                onChange={e => { onChange(e); console.log(e.target.value); }}
                placeholder="Type something" />

            <Button onClick={onCreate}>Create</Button>
        </>
    );
};

export default InputPage;