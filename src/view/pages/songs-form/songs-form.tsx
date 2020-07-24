import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { useHistory, RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { SongDispatcher } from '../../../redux/action/songs';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

interface IProps {
    style: React.CSSProperties;
}
const SongsForm: FC<IProps> = (props) => {
    const history = useHistory();
    const params = new URLSearchParams(history.location.search);

    const dispatcher = useDispatch();
    const rootDispatcher = new SongDispatcher(dispatcher);
    const [form] = Form.useForm();
    form.setFieldsValue({ keyword: params.get('keyword') });

    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        history.replace(`/list?provider=netease&keyword=${e.currentTarget.value}&page=1`);
        rootDispatcher.getSongList({ provider: 'netease', keyword: e.currentTarget.value, page: 1 });
    };
    return (
        <Form
            style={props.style}
            {...layout}
            name="basic"
            form={form}
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
