import React, { FC, useState, useEffect } from 'react';
import { Form, Input, message, Select, Radio } from 'antd';
import { useHistory } from 'react-router';
import style from './songs-form.module.scss';
import { ISongForm } from '../../../../redux/reducer/song';
import { Link } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
};
export enum ProviderType {
    '网易云' = 'netease',
    'QQ' = 'qq',
    '虾米' = 'xiami',
    '酷我' = 'kuwo',
}
export enum ListType {
    '热榜' = 1,
    '搜索' = 2,
}

interface IProps {
    tabDisable?: boolean;
    inputDisable?: boolean;
    style?: React.CSSProperties;
    sendHotQuery?: (p: string) => void;
    sendListQuery?: (query: ISongForm) => void;
}
const SongsForm: FC<IProps> = (props) => {
    const history = useHistory();
    const params = new URLSearchParams(history.location.search);
    const [form] = Form.useForm();
    const [pathname, setpathname] = useState<string>(history.location.pathname);

    const [provider, setprovider] = useState<string>(params.get('provider') || ProviderType.网易云);
    const [keyword, setkeyword] = useState<string>(params.get('keyword') || 'sia'); // 当前搜索关键词
    const [page, setpage] = useState<number>(Number(params.get('page')) || 1); // 页码
    form.setFieldsValue({ keyword: params.get('keyword') });

    useEffect(() => {
        pathname === '/songs/hot' ? search(provider, ListType.热榜) : search(keyword, ListType.搜索);
    }, []);

    const search = async (val: string, type: ListType) => {
        if (!val) {
            message.info('please input something ~~');
            return;
        }
        if (pathname === '/songs/hot') {
            if (type === ListType.热榜) {
                props.sendHotQuery?.(val);
            } else {
                history.replace(`/songs/list?provider=${provider}&keyword=${val}&page=1`);
            }
        } else {
            props.sendListQuery?.({ provider, keyword: val, page });
        }
    };
    const handleSelectProvider = (value: string) => {
        setprovider(value);
    };
    const selectAfter = (
        <Select defaultValue={provider} disabled={props.inputDisable} className="select-after" onChange={(value) => handleSelectProvider(value)}>
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
            {history.location.pathname === '/songs/hot' && (
                <Form.Item label="" name="provider">
                    <Radio.Group
                        disabled={props.tabDisable}
                        buttonStyle="solid"
                        defaultValue={provider}
                        value={provider}
                        onChange={(e) => {
                            setprovider(e.target.value);
                            search(e.target.value, ListType.热榜);
                        }}
                    >
                        <Radio.Button value={ProviderType.网易云}>网易云</Radio.Button>
                        <Radio.Button value={ProviderType.QQ}>QQ</Radio.Button>
                        <Radio.Button value={ProviderType.虾米} disabled>
                            虾米
                        </Radio.Button>
                        <Radio.Button value={ProviderType.酷我} disabled>
                            酷我
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
            )}
            <Form.Item label="" name="keyword">
                <Input
                    disabled={props.inputDisable}
                    maxLength={30}
                    addonAfter={selectAfter}
                    placeholder="please input something~"
                    onPressEnter={(event: React.KeyboardEvent<HTMLInputElement>) => {
                        setkeyword(event.currentTarget.value);
                        search(event.currentTarget.value, ListType.搜索);
                    }}
                />
            </Form.Item>
            {pathname === '/songs/list' && <Form.Item>
                <Link to={'/songs/hot'}>前往热榜</Link>
            </Form.Item>}
        </Form>
    );
};
export default SongsForm;
