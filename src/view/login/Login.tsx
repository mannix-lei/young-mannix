import React, { FC, useState } from 'react';
import { useAuth } from '../common/header/Auth';
import { Redirect } from 'react-router';
import { Card, Form, Input, Checkbox, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
interface IProps {}
const Login: FC = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const { setAuthTokens } = useAuth();

    const login = async () => {
        // await
    };

    // const referer = props.location.state.referer || '/';

    if (isLoggedIn) return <Redirect to="/" />;
    const onFinish = (values: Store) => {
        console.log('====================================')
        console.log(values)
        console.log('====================================')
    }
    const remember = () => {
        console.log('====================================')
        console.log(userName, password)
        console.log('====================================')
    }
    return (
        <div>
            <Card title="Login" bordered={false}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox onClick={() => remember}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};
export default Login;
