import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

interface IProps {
    style: React.CSSProperties;
}
const SongsForm: FC<IProps> = (props) => {
    const search = async (_e: React.KeyboardEvent<HTMLInputElement>) => {
        // todo
    };
    return (
        <Form
            style={props.style}
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
        >
            <Form.Item label="" name="keyword">
                <Input
                    placeholder="please input something~"
                    onPressEnter={(
                        event: React.KeyboardEvent<HTMLInputElement>
                    ) => search(event)}
                />
            </Form.Item>
        </Form>
    );
};
export default SongsForm;
