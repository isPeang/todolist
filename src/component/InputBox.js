import { Button, Input } from "antd";

const InputBox = ({ todo, onChange, onCreate }) => {
  return (
    <div >
      <Input
        type="text"
        value={todo}
        onChange={onChange}
        className=" w-[400px]"
      /> {' '}
      <Button onClick={onCreate}>สร้าง</Button>
    </div>
  );
};

export default InputBox;
