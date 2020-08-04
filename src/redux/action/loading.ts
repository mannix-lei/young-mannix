import { Dispatch, Action } from 'redux';
import { LoadingActionType } from '../reducer/loading';

export interface IDispatchAction extends Action {
    payload: Partial<any>;
}

export class LoadingDispatcher {
    private readonly dispatch: Dispatch<IDispatchAction>;

    constructor(dispatch: Dispatch<IDispatchAction>) {
        this.dispatch = dispatch;
    }

    public startLoading = async (loading: boolean) => {
        this.dispatch({ type: LoadingActionType.startLoading, payload: { loading }});
    }
    public stopLoading = async (loading: boolean) => {
        this.dispatch({ type: LoadingActionType.stopLoading, payload: { loading }});
    }
}
