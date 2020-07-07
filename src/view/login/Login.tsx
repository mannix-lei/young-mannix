import React, { FC, useState } from 'react';
import { useAuth } from '../common/header/Auth';
import { Redirect } from 'react-router';
import { Card, Form, Input, Checkbox, Button } from 'antd';
import style from './Login.module.scss';
import ReactCanvasNest from 'react-canvas-nest';
import { login } from '../../service/login-service';

const layout = {
    labelCol: { span: 5 },
};
interface IProps {}
const Login: FC = (props) => {
    const [form] = Form.useForm();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const { setAuthTokens } = useAuth();
    // const referer = props.location.state.referer || '/';

    form.setFieldsValue({ username: localStorage.getItem('username'), password: localStorage.getItem('password') });
    if (isLoggedIn) {
        return <Redirect to="/" />;
    }
    const onFinish = async (values: { username: string; password: string; remember: boolean }) => {
        if (values.remember) {
            localStorage.setItem('username', values.username);
            localStorage.setItem('password', values.password);
        } else {
            localStorage.setItem('username', '');
            localStorage.setItem('password', '');
        }
        login(values.username, values.password, values.remember);
    };

    return (
        <div className={style.body}>
            <ReactCanvasNest config={{ count: 50 }} style={{ zIndex: 0 }} />
            <Card title="Login" bordered={false} className={style.login}>
                <Form
                    {...layout}
                    form={form}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={(store) =>
                        onFinish({ username: store.username, password: store.password, remember: store.remember })
                    }
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
                        <Checkbox>Remember me</Checkbox>
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
