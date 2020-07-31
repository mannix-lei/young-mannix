import { Reducer, Action } from 'redux';

export enum LoadingActionType {
    setLoading,
}
export interface IInitialState {
    loading: boolean;
}

export const initialState: IInitialState = {
    loading: false,
};

export interface IDispatchAction extends Action<LoadingActionType> {
    payload: Partial<IInitialState>;
}
export const loadingReducer: Reducer<IInitialState, IDispatchAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case LoadingActionType.setLoading:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
