import React, { FC, useState } from 'react';
import { Form, Input, message, Select } from 'antd';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { SongDispatcher } from '../../../redux/action/songs';
import style from './songs-form.module.scss';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

interface IProps {
    style?: React.CSSProperties;
}
const SongsForm: FC<IProps> = (props) => {
    const history = useHistory();
    const params = new URLSearchParams(history.location.search);

    const dispatcher = useDispatch();
    const rootDispatcher = new SongDispatcher(dispatcher);
    const [form] = Form.useForm();
    const [provider, setprovider] = useState(params.get('provider') || 'netease');
    const [keyword, setkeyword] = useState(params.get('keyword'));
    form.setFieldsValue({ keyword: params.get('keyword') });

    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            message.info('please input something ~~');
            return;
        }
        history.replace(`/list?provider=${provider}&keyword=${e.currentTarget.value}&page=1`);
        rootDispatcher.getSongList({ provider, keyword: e.currentTarget.value, page: 1 });
    };
    const handleSelectProvider = (value: string) => {
        setprovider(value);
    };
    const selectAfter = (
        <Select defaultValue={provider || 'netease'} className="select-after" onChange={(value) => handleSelectProvider(value)}>
          <Select.Option value="netease">网易云</Select.Option>
          <Select.Option value="qq">QQ</Select.Option>
          <Select.Option value="xiami">虾米</Select.Option>
          <Select.Option value="kuwo">酷我</Select.Option>
        </Select>
      );
    return (
        <Form
            className={style.formBody}
            style={props.style}
            {...layout}
            name="basic"
            form={form}
            initialValues={{ remember: true }}
        >
            <Form.Item label="" name="keyword">
                <Input
                    addonAfter={selectAfter}
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
