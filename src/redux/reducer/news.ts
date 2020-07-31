import { Reducer, Action } from 'redux';

export enum NewsActionType {
    InitList,
}
export interface IInitialState {
    last_update: string;
    name: string;
    list: Array<{ title: string, link: string, other: string }>;
}

export const initialState: IInitialState = {
    last_update: '',
    name: '',
    list: [],
};

export interface IDispatchAction extends Action<NewsActionType> {
    payload: Partial<IInitialState>;
}
export const newsReducer: Reducer<IInitialState, IDispatchAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case NewsActionType.InitList:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
