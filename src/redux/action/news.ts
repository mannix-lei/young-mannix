import { Dispatch, Action } from 'redux';
import { NewsActionType } from '../reducer/news';
import { getNewsList } from '../../service/news';

export interface IDispatchAction extends Action {
    payload: Partial<any>;
}

export class NewsDispatcher {
    private readonly dispatch: Dispatch<IDispatchAction>;

    constructor(dispatch: Dispatch<IDispatchAction>) {
        this.dispatch = dispatch;
    }

    public getNewsList = async (type: string) => {
        const data = await getNewsList(type);
        this.dispatch({ type: NewsActionType.InitList, payload: { ...data }});
    }
}
