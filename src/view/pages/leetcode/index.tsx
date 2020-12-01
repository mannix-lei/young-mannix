import React, { FC } from 'react';
import { list } from './index.function';
import { Card } from 'antd';
import style from './index.module.scss';

const LeetCode: FC = () => {
    return (
        <div>
            {list.map((item) => (
                <Card style={{ marginBottom: '20px' }} title={item.title} extra={<a href={item.link} target="_blank">前往</a>}>
                    <a className={style.content} href={item.link} target="_blank">{item.content}</a>
                    <pre className={style.code}>
                        <code>{item.method}</code>
                    </pre>
                </Card>
            ))}
        </div>
    );
};
export default LeetCode;
