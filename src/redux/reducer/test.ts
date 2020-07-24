import { Reducer, Action } from 'redux';

export enum ActionType {
    UpdateName,
    UpdateAddress,
    DeleteName,
    DeleteAddress,
}
export interface IInitialState {
    name: string;
    address: string;
}

export const initialState: IInitialState = {
    name: '',
    address: '',
};

export interface IDispatchAction extends Action<ActionType> {
    payload: Partial<IInitialState>;
}
export const testReducer: Reducer<IInitialState, IDispatchAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionType.UpdateName:
            return { ...state, name: action.payload.name || '' };
        case ActionType.UpdateAddress:
            return { ...state, address: action.payload.address || '' };
        case ActionType.DeleteName:
            return { ...state, name: '' };
        case ActionType.DeleteAddress:
            return { ...state, address: '' };
        default:
            return state;
    }
};
