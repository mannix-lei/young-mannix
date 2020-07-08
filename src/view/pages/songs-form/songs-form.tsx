import React, { FC, useState } from 'react';
import { Form, Input } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
interface IProps {
    style: React.CSSProperties;
}

const SongsForm: FC<IProps> = ({ style }) => {
    const [keyword, setkeyword] = useState('');
    const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setkeyword(e.currentTarget.value);
    };
    return (
        <Form style={style} {...layout} name="basic" initialValues={{ remember: true }}>
            <Form.Item label="" name="keyword">
                <Input
                    placeholder="please input something~"
                    onPressEnter={(event: React.KeyboardEvent<HTMLInputElement>) => search(event)}
                />
            </Form.Item>
        </Form>
    );
};
export default SongsForm;
