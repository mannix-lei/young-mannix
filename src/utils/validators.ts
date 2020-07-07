import { Rule } from 'antd/lib/form';

export const validEmail: Rule = {
    type: 'email',
    message: 'please input correct email',
};
