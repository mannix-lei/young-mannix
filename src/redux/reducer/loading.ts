import { Reducer, Action } from 'redux';

export enum LoadingActionType {
    startLoading,
    stopLoading,
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
        case LoadingActionType.startLoading:
            return { loading: true };
        case LoadingActionType.stopLoading:
            return { loading: false };
        default:
            return state;
    }
};
