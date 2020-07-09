import React, { FC, useState } from 'react';
import { useAuth } from '../common/Auth';
import { Redirect } from 'react-router';
import { Card, Form, Input, Checkbox, Button } from 'antd';
import style from './Login.module.scss';
import ReactCanvasNest from 'react-canvas-nest';
import { login } from '../../service/login';
import { validEmail } from '../../utils/validators';

const layout = {
    labelCol: { span: 5 },
};
interface IProps {
    [x: string]: any;
}
const Login: FC = (props: IProps) => {
    const [form] = Form.useForm();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const { setAuthTokens } = useAuth();
    const referer = ((props.location || {}).state || {}).referer || '/';

    form.setFieldsValue({ email: localStorage.getItem('email'), password: localStorage.getItem('password') });

    const onFinish = async (values: { email: string; password: string; remember: boolean }) => {
        if (values.remember) {
            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);
        } else {
            localStorage.setItem('email', '');
            localStorage.setItem('password', '');
        }
        const { token } = await login(values.email, values.password, values.remember);
        setAuthTokens({ token });
        setLoggedIn(true);
    };

    if (isLoggedIn) {
        // return <Redirect to={referer.pathname || '/list'} />;
        return <Redirect to={'/list'} />;
    }

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
                        onFinish({ email: store.email, password: store.password, remember: store.remember })
                    }
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[validEmail, { required: true, message: 'Please input your email!' }]}
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
