import { CityActionType } from './../reducer/city';
import { Dispatch, Action } from 'redux';
import { getCurrentCity } from '../../service/city';

export interface IDispatchAction extends Action {
    payload: Partial<any>;
}

export class CityDispatcher {
    private readonly dispatch: Dispatch<IDispatchAction>;

    constructor(dispatch: Dispatch<IDispatchAction>) {
        this.dispatch = dispatch;
    }

    public getLocalCity = async () => {
        const data = await getCurrentCity();
        this.dispatch({ type: CityActionType.InitData, payload: { ...data }});
    }
}
