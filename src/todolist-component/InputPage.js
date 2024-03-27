import { Button, Input, Form } from "antd";
import { useState } from 'react';

function InputPage({InputForm, submitfx}) {
    return (
        <>
        
            <Form form={InputForm} onFinish={submitfx}>
                <Form.Item>
                    <Input/>
                </Form.Item>
            </Form>

            <Button htmlType="submit">Submit</Button>
        </>
    );
};

export default InputPage;