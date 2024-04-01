import { Input, Form, Button } from "antd";
import React from "react";

const InputComponent = ({todo, change, onCreate}) => (
       <>
       <Input 
       type="text"
       placeholder="Type something"
       value={todo}
       onChange={change}
       style={{width:400, margin:15}}/> 
       <Button onClick={onCreate}>Create</Button>
       </>
);

export default InputComponent;