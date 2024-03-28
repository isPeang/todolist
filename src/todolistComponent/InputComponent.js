import { Button, Input } from "antd";

const InputComponent = ({value, onChange, onCreate}) => {
    return (
        <>
        <h1></h1>
           <Input
           value={value}
           onChange={onChange}
           style={{width:'300px', margin:'20px'}}/>
           <Button onClick={onCreate} >Create</Button>
        </>
    );
};

export default InputComponent;