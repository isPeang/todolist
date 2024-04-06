import { Button, Form, Input } from "antd";

const FormInput = ({todo, onChange, onCreate
}) => {
  return (
    <Form>
      <Form.Item>
        <Input
          className=" justify-center w-[300px]"
          value={todo}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={onCreate}>Create</Button>
      </Form.Item>
    </Form>
  );
};

export default FormInput;
