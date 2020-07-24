import { Dispatch, Action } from 'redux';
import { ActionType } from '../reducer/test';

export interface IDispatchAction extends Action {
    payload: Partial<any>;
}

export class RootDispatcher {
    private readonly dispatch: Dispatch<IDispatchAction>;

    constructor(dispatch: Dispatch<IDispatchAction>) {
        this.dispatch = dispatch;
    }

    updateName = async (name: string) => {
        this.dispatch({ type: ActionType.UpdateName, payload: { name } });
    }
    updateAddress = (address: string) =>
        this.dispatch({ type: ActionType.UpdateAddress, payload: { address } })
    deleteName = () =>
        this.dispatch({ type: ActionType.DeleteName, payload: {} })
    deleteAddress = () =>
        this.dispatch({ type: ActionType.DeleteAddress, payload: {} })
}
