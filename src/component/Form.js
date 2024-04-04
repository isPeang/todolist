import { Button, Form, Input } from "antd";


const FormTodo = ({ form, todo, onChange, onCreate }) => {
  

  return (
    <>
      <Form form={form} onFinish={onCreate}>
        <Form.Item name="input">
          <Input
            value={todo}
            onChange={onChange}
            placeholder="put something in here"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Create</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormTodo;
