import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { Dispatch, bindActionCreators } from 'redux';
import { setFormData } from '../../../redux/action/songs';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const mapStateToProps = (state: RootState) => ({
    list: state.song,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            setFormData,
        },
        dispatch
    );
};

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {
        style: React.CSSProperties;
    };
const SongsForm: FC<IProps> = (props) => {
    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        props.setFormData({ provider: 'netease', keyword: e.currentTarget.value, page: 1 });
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
export default connect(mapStateToProps, mapDispatchToProps)(SongsForm);
