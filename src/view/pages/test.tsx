import React, { FC } from 'react';
import { Input } from 'antd';
import { IInitialState } from '../../redux/reducer/test';
import { useSelector, useDispatch } from 'react-redux';
import { RootDispatcher } from '../../redux/action/test';

interface IProps {}
interface IStateProps {
    name: string;
    address: string;
}

interface IStateProps {
    name: string;
    address: string;
}

const TextFoo: FC<IProps> = () => {
    const { name, address } = useSelector<IInitialState, IStateProps>(
        (state: IInitialState) => {
            return {
                name: state.name,
                address: state.address,
            };
        }
    );
    const dispatch = useDispatch();
    const rootDispatch = new RootDispatcher(dispatch);
    return (
        <div>
            this is test page;
            <Input
                placeholder='name'
                value={name}
                onChange={(e) => {
                    rootDispatch.updateName(e.target.value);
                }}
            />
            <Input
                placeholder='address'
                value={address}
                onChange={(e) => {
                    rootDispatch.updateAddress(e.target.value);
                }}
            />
        </div>
    );
};

export default TextFoo;
