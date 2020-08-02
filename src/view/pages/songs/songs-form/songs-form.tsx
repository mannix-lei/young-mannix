import React, { FC, useState } from 'react';
import { Form, Input, message, Select, Radio } from 'antd';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import style from './songs-form.module.scss';
import { SongDispatcher } from '../../../../redux/action/songs';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
export enum ProviderType {
    '网易云' = 'netease',
    'QQ' = 'qq',
    '虾米' = 'xiami',
    '酷我' = 'kuwo',
}

interface IProps {
    style?: React.CSSProperties;
}
const SongsForm: FC<IProps> = (props) => {
    const history = useHistory();
    const params = new URLSearchParams(history.location.search);

    const dispatcher = useDispatch();
    const rootDispatcher = new SongDispatcher(dispatcher);
    const [form] = Form.useForm();
    const [provider,setprovider] = useState(() => {
        const p = params.get('provider') || ProviderType.网易云;
        return p;
    });
    form.setFieldsValue({ keyword: params.get('keyword')});

    const search = async (val: string) => {
        if (!val) {
            message.info('please input something ~~');
            return;
        }
        if (history.location.pathname === '/songs/hot') {
            rootDispatcher.getHotSong(val);
            history.replace(`/songs/hot?provider=${val}`);
        } else {
            history.replace(`/songs/list?provider=${provider}&keyword=${val}&page=1`);
            rootDispatcher.getSongList({ provider, keyword: val, page: 1 });
        }
    };
    const handleSelectProvider = (value: string) => {
        setprovider(value);
    };
    const selectAfter = (
        <Select defaultValue={provider || ProviderType.网易云} className="select-after" onChange={(value) => handleSelectProvider(value)}>
          <Select.Option value={ProviderType.网易云}>网易云</Select.Option>
          <Select.Option value={ProviderType.QQ}>QQ</Select.Option>
          <Select.Option value={ProviderType.虾米}>虾米</Select.Option>
          <Select.Option value={ProviderType.酷我}>酷我</Select.Option>
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
                    maxLength={30}
                    addonAfter={selectAfter}
                    placeholder="please input something~"
                    onPressEnter={(
                        event: React.KeyboardEvent<HTMLInputElement>
                    ) => search(event.currentTarget.value)}
                />
            </Form.Item>
           <Form.Item label="" name="provider">
                <Radio.Group buttonStyle="solid" value={provider} onChange={(e) => {
                        form.setFieldsValue({ provider: e.target.value });
                        setprovider(e.target.value);
                        search(e.target.value); }}>
                    <Radio.Button value={ProviderType.网易云}>网易云</Radio.Button>
                    <Radio.Button value={ProviderType.QQ}>QQ</Radio.Button>
                    <Radio.Button value={ProviderType.虾米} disabled>虾米</Radio.Button>
                    <Radio.Button value={ProviderType.酷我} disabled>酷我</Radio.Button>
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};
export default SongsForm;
