import { Button, Input } from "antd";

const InputBox = ({ todo, onChange, onSubmit }) => {
  return (
    <div className=" mb-2 flex justify-center items-center">
      <Input value={todo} onChange={onChange} className=" w-[300px] mr-1 " />
      <Button onClick={onSubmit} >สร้าง</Button>
    </div>
  );
};

export default InputBox;
