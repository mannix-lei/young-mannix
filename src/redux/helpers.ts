import store from './index';
// export function typedAction<T extends string>(type: T): { type: T };
// export function typedAction<T extends string, P extends any>(type: T, payload: P): { type: T; payload: P };
export const typedAction = (type: string, payload?: any) => {
    return { type, payload };
};
