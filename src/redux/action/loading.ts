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

    public setLoading = async (loading: boolean) => {
        this.dispatch({ type: LoadingActionType.setLoading, payload: { loading }});
    }
}
