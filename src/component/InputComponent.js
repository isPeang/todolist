import { Button, Input } from "antd"

const InputComponent = ({ todo, onChange, onCreate }) => {
    return (
        <>
            <Input
                type="text"
                value={todo}
                onChange={onChange} 
                style={{width: 350}}
                placeholder="Type something 📝"/>
            {' '}
            <Button onClick={onCreate}>Create</Button>
        </>
    );
};

export default InputComponent;