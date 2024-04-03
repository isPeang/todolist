import { Button, Input } from 'antd'

const InputComponent = ({ todo, onChange, onCreate }) => {
    return (
        <>
            <Input
                className=' w-[300px] m-3'
                value={todo}
                onChange={onChange}
                placeholder='Type something. . . '
            />
            <Button onClick={onCreate}>Create</Button>
        </>
    );
};

export default InputComponent;