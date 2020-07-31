import { Reducer, Action } from 'redux';

export enum CityActionType {
    InitData,
}
export interface IInitialState {
    cid: string;
    cip: string;
    cname: string;
}

export const initialState: IInitialState = {
    cid: '',
    cip: '',
    cname: '',
};

export interface IDispatchAction extends Action<CityActionType> {
    payload: Partial<IInitialState>;
}
export const cityReducer: Reducer<IInitialState, IDispatchAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CityActionType.InitData:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
